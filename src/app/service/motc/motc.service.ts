import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RailStationTimetable, RailStation, RailGeneralTimetable } from 'src/app/interface/rail';
import { BusN1EstimateTime } from 'src/app/interface/bus';
declare const require;
const jssha = require('jssha');
@Injectable({
  providedIn: 'root'
})
export class MotcService {
  appID = 'b9b3f9e45e904b6c9034acfdb9fcadbb';
  appKey = 'Aul-F_2JjCj8s8ICW47MxicqdoE';
  MotcHttpOptions = {};
  nowTime = new Date().getHours() + ':' + new Date().getMinutes();
  citys = [
    '基隆市',
    '臺北市',
    '新北市',
    '宜蘭縣',
    '桃園縣',
    '新竹市',
    '新竹縣',
    '苗栗縣',
    '臺中市',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義市',
    '嘉義縣',
    '臺南市',
    '高雄市',
    '屏東縣',
    '花蓮縣',
    '臺東縣'];
  defaultCity = '高雄市';
  defaultStationID = '1231';
  stationID = '';
  RailStations: RailStation[] = [];
  RailStationTimetablesRight: RailStationTimetable[] = [];
  RailStationTimetablesLeft: RailStationTimetable[] = [];
  RailGeneralTimetable: RailGeneralTimetable;

  BusN1EstimateTimesRightTab = '';
  BusN1EstimateTimesLeftTab = '';
  BusN1EstimateTimesRight: BusN1EstimateTime[] = [];
  BusN1EstimateTimesLeft: BusN1EstimateTime[] = [];
  constructor(
    private http: HttpClient,
  ) {
    setInterval(() => {
      this.nowTime = new Date().getHours() + ':' + new Date().getMinutes();
    }, 1000);

    const UTCString = new Date().toUTCString();
    const shaObj = new jssha('SHA-1', 'TEXT');
    shaObj.setHMACKey(this.appKey, 'TEXT');
    shaObj.update('x-date: ' + UTCString);
    const HMAC = shaObj.getHMAC('B64');
    const authorization = 'hmac username=\"' + this.appID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    this.MotcHttpOptions = { headers: { Authorization: authorization, 'x-date': UTCString, 'Accept-Encoding': 'gzip' } };

    // setInterval(() => {
    //   UTCString = new Date().toUTCString();
    //   shaObj = new jssha('SHA-1', 'TEXT');
    //   shaObj.setHMACKey(this.appKey, 'TEXT');
    //   shaObj.update('x-date: ' + UTCString);
    //   HMAC = shaObj.getHMAC('B64');
    //   authorization = 'hmac username=\"' + this.appID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    //   this.MotcHttpOptions = { headers: { Authorization: authorization, 'x-date': UTCString, 'Accept-Encoding': 'gzip' } };
    // }, 5000 );

  }

  RailTRAStation(city: string) {
    // tslint:disable-next-line: max-line-length
    this.http.get<RailStation[]>(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$filter=contains(StationAddress, '${city}')&$format=JSON`, this.MotcHttpOptions).subscribe(
      (v: RailStation[]) => {
        this.RailStations = v;
        this.stationID = v[0].StationID;
        this.RailTRADailyTimetableStation(v[0].StationID);
      }
    );
  }

  RailTRADailyTimetableStation(stationID: string) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const data = yyyy + '-' + mm + '-' + dd;
    // tslint:disable-next-line: max-line-length
    this.http.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/Station/${stationID}/${data}?$filter=Direction eq 0&$orderby=ArrivalTime&$format=JSON`, this.MotcHttpOptions).subscribe(
      (v: RailStationTimetable[]) => {
        this.RailStationTimetablesRight = v;
      }
    );
    // tslint:disable-next-line: max-line-length
    this.http.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/Station/${stationID}/${data}?$filter=Direction eq 1&$orderby=ArrivalTime&$format=JSON`, this.MotcHttpOptions).subscribe(
      (v: RailStationTimetable[]) => {
        this.RailStationTimetablesLeft = v;
      }
    );
  }

  RailTRAGeneralTimetableTrainNo(trainNo: string) {
    // tslint:disable-next-line: max-line-length
    this.http.get<RailGeneralTimetable[]>(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/GeneralTimetable/TrainNo/${trainNo}?&$format=JSON`, this.MotcHttpOptions).subscribe(
      (v: RailGeneralTimetable[]) => {
        console.log('RailGeneralTimetable', v);
        this.RailGeneralTimetable = v[0];
      }
    );
  }

  BusEstimatedTimeOfArrivalCity(City: string, RouteName: string) {
    // tslint:disable-next-line: max-line-length
    this.http.get<BusN1EstimateTime[]>(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${City}/${RouteName}?$filter=Direction eq 0&$format=JSON&$orderby=StopSequence`, this.MotcHttpOptions).subscribe(
      (v: BusN1EstimateTime[]) => {
        if (v.length !== 0) {
          this.BusN1EstimateTimesRight = v;
          this.BusN1EstimateTimesRightTab = v[0].StopName.Zh_tw + '>\n' + v.slice(-1)[0].StopName.Zh_tw;
        }
      }
    );
    // tslint:disable-next-line: max-line-length
    this.http.get<BusN1EstimateTime[]>(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${City}/${RouteName}?$filter=Direction eq 1&$format=JSON&$orderby=StopSequence`, this.MotcHttpOptions).subscribe(
      (v: BusN1EstimateTime[]) => {
        if (v.length !== 0) {
          this.BusN1EstimateTimesLeft = v;
          this.BusN1EstimateTimesLeftTab = v[0].StopName.Zh_tw + '>\n' + v.slice(-1)[0].StopName.Zh_tw;
        }
      }
    );
  }

}

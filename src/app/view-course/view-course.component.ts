import { Component, OnInit } from '@angular/core';
import { ViewcourseService } from '../viewcourse.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private viewcourse:ViewcourseService) { 
    viewcourse.viewcourse().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }

  data:any=[
    {"_id":"628df3501b5a4c0016b7bc61"},{"_id":"628df3b31b5a4c0016b7bc62","courseTitle":"Node JS","courseDescription":"Node Course","courseDuration":"4 Months","courseDate":"2022-05-27","courseVenue":"SCMS"},{"_id":"628df3bd1b5a4c0016b7bc63","courseTitle":"Ruby","courseDescription":"Ruby is an open-source object-oriented scripting language","courseDuration":"3 months","courseVenue":"KOCHI","courseDate":"2022-05-26"},{"_id":"628df3e71b5a4c0016b7bc64","courseTitle":"IMCA","courseDescription":"heloooo","courseVenue":"scms"},{"_id":"628df3ff1b5a4c0016b7bc65","courseTitle":"Java","courseDescription":"Java Course","courseDuration":"8 months","courseDate":"2022-06-03","courseVenue":"Online"},{"_id":"628df4321b5a4c0016b7bc66","courseTitle":"gfyf","courseDescription":"hh","courseDuration":"bb","courseVenue":"b","courseDate":"2022-05-06"},{"_id":"628df43c1b5a4c0016b7bc67","courseTitle":"IMCA","courseDescription":"helooo","courseVenue":"scms","courseDate":"2022-05-27","courseDuration":"as long as u needed"},{"_id":"628df43f1b5a4c0016b7bc68","courseTitle":"IMCA","courseDescription":"helooo","courseVenue":"scms","courseDate":"2022-05-27","courseDuration":"as long as u needed"},{"_id":"628df4671b5a4c0016b7bc69","courseTitle":"PEARL","courseDescription":"PERAL LANGUAGE","courseDuration":"5","courseDate":"2022-05-25","courseVenue":"SCMS"},{"_id":"628df46c1b5a4c0016b7bc6a","courseTitle":"PHP","courseDescription":"PHP is a simple language","courseDuration":"3 Months","courseVenue":"Kochi","courseDate":"2022-05-27"},{"_id":"628df46d1b5a4c0016b7bc6b","courseTitle":"Integrated MCA","courseDescription":"Wonderful Course","courseDuration":"5 yrs","courseVenue":"SCMS ","courseDate":"2022-11-09"},{"_id":"628df4831b5a4c0016b7bc6c","courseTitle":"imca","courseDescription":"nannyitt ind","courseDuration":"5 year","courseVenue":"scms","courseDate":"2022-05-29"},{"_id":"628df4831b5a4c0016b7bc6d","courseTitle":"imca","courseDescription":"nannyitt ind","courseDuration":"5 year","courseVenue":"scms","courseDate":"2022-05-29"},{"_id":"628df4831b5a4c0016b7bc6e","courseTitle":"java","courseDescription":"java is very simple and powerful!!!","courseDuration":"2 months","courseVenue":"Vypin","courseDate":"2022-05-31"},{"_id":"628df48e1b5a4c0016b7bc6f","courseTitle":"java","courseDescription":"java is very simple and powerful!!!","courseDuration":"2 months","courseVenue":"Vypin","courseDate":"2022-05-31"},{"_id":"628df4c81b5a4c0016b7bc70","courseTitle":"mca","courseDescription":"this is computer application course","courseVenue":"cochin","courseDate":"2022-05-30","courseDuration":"5 months"},{"_id":"628df4d91b5a4c0016b7bc71","courseTitle":"mca","courseDescription":"this is computer application course","courseVenue":"cochin","courseDate":"2022-05-30","courseDuration":"5 months"},{"_id":"628df4f61b5a4c0016b7bc72","courseTitle":"Gopika Krishna ","courseDescription":"This is a useless course","courseDuration":"1 Month","courseVenue":"Palarivattom","courseDate":"2022-04-01"},{"_id":"628df4fa1b5a4c0016b7bc73","courseTitle":"php","courseDescription":"iefgbhgf","courseDuration":"3","courseDate":"2022-05-18","courseVenue":"online"},{"_id":"628df4fc1b5a4c0016b7bc74","courseTitle":"imca","courseDescription":"this is computer application course","courseVenue":"cochin","courseDate":"2022-05-30","courseDuration":"5"},{"_id":"628df52e1b5a4c0016b7bc75","courseTitle":"imca","courseDescription":"nice","courseDuration":"5 years","courseVenue":"scms","courseDate":"2022-05-26"},{"_id":"628df5351b5a4c0016b7bc76","courseTitle":"php","courseDescription":"tshsths","courseDuration":"3 months","courseDate":"2022-04-30","courseVenue":"online"},{"_id":"628df5741b5a4c0016b7bc77","courseTitle":"java","courseDescription":"simple and powerful","courseDuration":"5","courseDate":"2023-03-21","courseVenue":"ekm"},{"_id":"628df57c1b5a4c0016b7bc78","courseTitle":"scms","courseDescription":"sstm","courseVenue":"kochi","courseDate":"2022-05-26","courseDuration":"1"},{"_id":"628df58b1b5a4c0016b7bc79","courseTitle":"Hari sad","courseDescription":"Im Saad Gooys :(","courseDuration":"I dont know mekkeleee","courseVenue":"Ente veed","courseDate":"2022-05-01"},{"_id":"628df5c51b5a4c0016b7bc7a","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc7b","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc7d","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc7c","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc7e","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc7f","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc80","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc81","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc82","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc83","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df5c51b5a4c0016b7bc84","courseTitle":"Aleenas Toxic Class","courseDescription":"Satisfaction guaranteed. Definitely","courseDuration":"Ningalk ethra naal venam.........I will provide....!!!!!!!!!!","courseVenue":"Evde venelm ninn attend cheyyam.....Online only","courseDate":"2022-04-01"},{"_id":"628df6541b5a4c0016b7bc85","courseTitle":"java","courseDuration":"4","courseDate":"2022-05-26"},{"_id":"628df6881b5a4c0016b7bc86","courseTitle":"hamzaaa","courseDuration":"000","courseDate":"2022-05-26"},{"_id":"628df71d1b5a4c0016b7bc87","courseTitle":"a","courseDescription":"s","courseDuration":"f","courseVenue":"g","courseDate":"2022-05-28"},{"_id":"628df7b01b5a4c0016b7bc88","courseTitle":"Sony makan Tony","courseDescription":"tony ka daddy Sony","courseDuration":"9yrs 9 months 9 days","courseDate":"2022-04-29","courseVenue":"Ponekkara"},{"_id":"628df7b01b5a4c0016b7bc89","courseTitle":"Sony makan Tony","courseDescription":"tony ka daddy Sony","courseDuration":"9yrs 9 months 9 days","courseDate":"2022-04-29","courseVenue":"Ponekkara"},{"_id":"628df7b01b5a4c0016b7bc8a","courseTitle":"Sony makan Tony","courseDescription":"tony ka daddy Sony","courseDuration":"9yrs 9 months 9 days","courseDate":"2022-04-29","courseVenue":"Ponekkara"},{"_id":"628df7df1b5a4c0016b7bc8b","courseTitle":"gymman fareed","courseDescription":"gymmen fared hlp u to be a gymmen","courseDuration":"till you bcma gymmen","courseVenue":"any where","courseDate":"2022-05-28"},{"_id":"628e47d40ec9f700165c7fa3","courseTitle":"React","courseDescription":"React Course","courseDuration":"4 Months","courseDate":"2022-05-06","courseVenue":"ONLINE"},{"_id":"628e48550ec9f700165c7fa4","courseTitle":"C#","courseDescription":"C# course","courseDuration":"8 months","courseDate":"2022-10-10","courseVenue":"SCMS"},{"_id":"62901068f1e58200165f988e"},{"_id":"62cfd9dc40286600167e2060"},{"_id":"62cfdaee40286600167e2061"},{"_id":"62cfdb6f40286600167e2062","courseTitle":"FSD","courseDescription":"Web development in progress","courseDate":"2022-06-30","courseVenue":"ICT Academy","courseDuration":"6 MONTHS"},{"_id":"62d0064b0828390016017874","courseTitle":"FSD","courseDescription":"Full tack development","courseDuration":"6 months","courseDate":"30-07-2022","courseVenue":"ICT"}
    ]
}
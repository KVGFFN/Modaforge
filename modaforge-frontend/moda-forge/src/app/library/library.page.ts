import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  

  models = [];



  constructor() { }

  ngOnInit() {
    this.models = [
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/1ba08a69b808c54a0a53ac78a4eea5f8/large.jpg",
        title: "HOPKINS & ALLEN - POLICE STD 32 CALIBER",
        description: "This was a request . Obsolete model from 1910. Not perfect but neither were the drawings. full solidworks (2018) files and IGES file."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/1ba08a69b808c54a0a53ac78a4eea5f8/large.jpg",
        title: "HOPKINS & ALLEN - POLICE STD 32 CALIBER",
        description: "This was a request . Obsolete model from 1910. Not perfect but neither were the drawings. full solidworks (2018) files and IGES file."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/1ba08a69b808c54a0a53ac78a4eea5f8/large.jpg",
        title: "HOPKINS & ALLEN - POLICE STD 32 CALIBER",
        description: "This was a request . Obsolete model from 1910. Not perfect but neither were the drawings. full solidworks (2018) files and IGES file."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      {
        imageurl: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/298d3fa285f9fac94740bc5e4b19408b/large.JPG",
        title: "FIRE FIGHTER Fireboat",
        description: "The famous NYFD fireboat from 1938. Drawn in the as-launched condition; the fireboat is a museum today and is pretty much original, but a number of details have changed over the years."
      },
      
    ]

    console.log(this.models);
  }

}

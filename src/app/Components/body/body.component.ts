import { Component, OnInit } from '@angular/core';


interface bookData{
  id:number,
  name:string,
  author:string,
  img:string,
  Price:number,
  desc:string
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {
  bookArray:Array<bookData> = [];
  bookDetails:string="";
  bookId:number=-1;
  ngOnInit(): void {
    this.bookArray=[
      {
        "id": 1,
        "name": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "img": "https://m.media-amazon.com/images/I/81Vuk+qsXRL._AC_UF1000,1000_QL80_.jpg",
        "Price": 599,
        "desc": "The magical journey begins as Harry Potter, an ordinary boy, discovers he is a wizard. Join him in his adventures at Hogwarts School of Witchcraft and Wizardry, where friendships are forged, mysteries unravel, and dark forces rise. A tale of courage, friendship, and the power of love."
      },
      {
        "id": 2,
        "name": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling",
        "img": "https://rukminim2.flixcart.com/image/850/1000/kjiwfbk0-0/book/g/j/3/harry-potter-and-the-chamber-of-secrets-original-imafz287wduh4ey6.jpeg?q=90&crop=false",
        "Price": 649,
        "desc": "In his second year at Hogwarts, Harry faces new challenges as the Chamber of Secrets is opened, unleashing a series of mysterious attacks. With the help of his friends Ron and Hermione, Harry must uncover the secrets hidden within the school's walls and confront the ancient evil that threatens Hogwarts."
      },
      {
        "id": 3,
        "name": "Harry Potter and the Prisoner of Azkaban",
        "author": "J.K. Rowling",
        "img": "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
        "Price": 699,
        "desc": "As Harry enters his third year at Hogwarts, he learns about Sirius Black, a dangerous prisoner who has escaped Azkaban and is believed to be after him. With new magical creatures and unexpected alliances, Harry discovers the truth about his past and the challenges that lie ahead."
      },
      {
        "id": 4,
        "name": "Harry Potter and the Goblet of Fire",
        "author": "J.K. Rowling",
        "img": "https://m.media-amazon.com/images/I/81sUIr3c1pL._AC_UF1000,1000_QL80_.jpg",
        "Price": 799,
        "desc": "The Triwizard Tournament brings excitement and danger to Hogwarts. Selected as a competitor, Harry faces deadly tasks and uncovers a dark plot that threatens the wizarding world. As tensions rise, friendships are tested, and the Dark Lord returns, Harry must confront his destiny and the forces that seek to destroy him."
      }
    ]
      
  }
  constructor(){}

  public getBookDetails(index:number):void{
    if(this.bookDetails){
      this.bookDetails="";
    }
    else{
      this.bookId= this.bookArray[index].id;
      this.bookDetails = this.bookArray[index].desc;
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'directives';
  propTeste!: string;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('propTeste',this.propTeste)
    this.teste()

    console.log('propTesteAlterada',this.propTeste)

  }

  @SimpleDecorator({
    id: 1,
    permissions: 'admin'
  })
  teste() {
    console.log('rodou');
  }
}


// Basically I can pass any parameter to a decorator, evaluate its code and then apply the suitable code
function SimpleDecorator(message:Object){
  console.log('oioioi', message);

  return function(target: any, key: any, descriptor: any) {

    console.log('Our decorated class', target);
    console.log('Our decorated key', key);
    console.log('Our decorated k2131', message);
    console.log('Our decorated descriptor', descriptor);
    descriptor.value = function(){
      console.log('rodou nada po', this, arguments);
    }
  };

}


function testeLouco(fn: any, message: any){
  
}
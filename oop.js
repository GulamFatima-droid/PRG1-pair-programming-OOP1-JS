class Person {

    _name;
    _dateOfBirth;
    _placeOfBirth;
  
    constructor(name, dateOfBirth, placeOfBirth){
      this._name = name;
      this._dateOfBirth = dateOfBirth;
      this._placeOfBirth = placeOfBirth;
      
    }
  
    get name(){
      return this._name;
    }
    
    set name(name){
      this._name = name;
    }
  
    get dateOfBirth(){
      return this._dateOfBirth;
    }
  
    talk(){
      return `Hi my name is ${this._name} and I was born in ${this._placeOfBirth}.`;
    }
    
  }
  
  
  class AdaStaff extends Person {
  
    _role;
    _base;
  
    constructor(name, dateOfBirth, placeOfBirth, role, base){
  
      super(name, dateOfBirth, placeOfBirth);
      this._role = role;
      this._base = base;
    }
  
    get base(){
      return this._base;
    }
    
    set base(base){
      this._base = base;
    }
  
    get role(){
      return this._role;
    }
    
    set role(role){
      this._role = role;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I work in ${this._base} and my role is ${this._role}.`;
    }
    
    
  }

  class AdaStudent extends Person{
    _company;
    _pathway;
    _yearStarted;

    constructor(name, dateOfBirth, placeOfBirth,company,pathway,yearStarted){
      super(name,dateOfBirth,placeOfBirth);
      this._company = company;
      this._pathway = pathway;
      this._yearStarted = yearStarted;
      
    }

    get company(){
      return this._company;
    }

    set company(company){
      this._company = company;
    }

    get pathway(){
      return this._pathway;
    }

    set pathway(pathway){
      this._pathway = pathway;
    }

    talk(){
      return `Hi my name is ${this._name}. I work in ${this._company} and my pathway is ${this._pathway}.`;
    }
  }

  class Cohort {

    _cohortCode;
      
      constructor(cohortCode){
    
        this._cohortCode = cohortCode;
        this.cohort = [];
    
      }

      add(adaStudent) {
        this.cohort.push(adaStudent)
        return this.cohort.length;
     }

       list(){
        for(const member of this.cohort){
          console.log(member._name);
        }
       }
    }

    
  
      
    
    
    
    
    
    
  
  const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
  const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
  const april24 = new Cohort("24-04-LDN-MCR");
  const sumilA = new AdaStudent("Sumil Aryin", "22/12/2002", "London", "PwC", "TC", 2024);

  april24.add(sumilA);
  april24.add(new AdaStudent("Jess Fryer", "02/02/1998", "Manchester", "PwC", "TC", 2024))
  
  
  
  april24.list();
  console.log(april24);
  console.log(steve);
  console.log(aqil);
  console.log(steve.talk());
  console.log(aqil.talk());
  console.log(steve.name);

  
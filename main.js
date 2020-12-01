// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
  mockUpStrand(dnaBases)
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = (dnaBases) => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
//console.log(mockUpStrand());

const specimenNum = () =>{
  return Math.floor(Math.random() * 10000)
}

const pAequorFactor = (specimenNum, dna) =>{
  return {
    number: specimenNum,
    dna: dna,
    mutate() {
      const dnaBases = ['A', 'T', 'C', 'G'];
      const randomSelect = dnaBases[Math.floor(Math.random() * 4)]
      const randomBase =  Math.floor(Math.random() * dna.length);
            if(dna[randomBase] !== randomSelect){
              dna[randomBase] = randomSelect
            }
            console.log(dna)  
        },
    compareDNA(pAequor){
      let sum = 0;
      for(let i = 0; i < pAequor.dna.length; i++){
          if(pAequor.dna[i] === this.dna[i]){
            sum += 1 
          }
        }
      let percetageInCommon =Math.floor((sum / 15)*100)
      console.log(`specimen ${this.number} and speciment ${pAequor.number} have ${percetageInCommon}% DNA in common`)
    },
    willLikelySurvive(){
      //console.log(this.dna)
      let counter = 0
      for(let i = 0; i < this.dna.length; i++){
        switch(this.dna[i]){
          case 'C': counter++
          break;
          case 'G': counter++
          break;
        }
      }
      counter = Math.floor((counter/15)*100)
      //console.log(counter)
      if(counter >= 60){
        return true
      }else{
        return false
      }
    },
    complementStrand() { 
      let complementaryStrand = [];
      for ( let i = 0; i < this.dna.length; i++ ) {
        if ( this.dna[i] === "A" ) { complementaryStrand.push("T"); }           
        else if ( this.dna[i] === "T" ) { complementaryStrand.push("A"); }      
        else if ( this.dna[i] === "C" ) { complementaryStrand.push("G"); }      
        else if ( this.dna[i] === "G" ) { complementaryStrand.push("C"); }      
        else complementaryStrand.push(this.dna[i]);
      }
      return `Original DNA strand: ${this.dna}
Complementary DNA strand: ${complementaryStrand}`
      },
  }
};
  let arrayOfSurvivors = () => {
      let survivors = [];
      while(survivors.length < 30){
        let i = 1;
        let sample = pAequorFactor(i, mockUpStrand());
        sample = pAequorFactor(i, mockUpStrand()); 
    if ( sample.willLikelySurvive() === true ) {
        survivors.push(sample.dna);
      }
      i++
    }
    return survivors
  }
const dna1 = pAequorFactor(1, mockUpStrand());
const dna2 = pAequorFactor(2, mockUpStrand());
//console.log(dna1);
//console.log(dna2);
//dna1.mutate();
//dna1.compareDNA(dna2);
//console.log(dna1.willLikelySurvive());
//console.log(arrayOfSurvivors())

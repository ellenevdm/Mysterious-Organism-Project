// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

//console.log(returnRandBase())
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//console.log(mockUpStrand())

const pArquorFactory = (specimenNum, dna) => {
  return {
    specimenNum, 
    dna,
    mutate () {
      console.log(dna)
      const dnaBases = ['A', 'T', 'C', 'G']
      let randomIndex = Math.floor(Math.random() * 14) 
      console.log(randomIndex)
      let toChange = dna.at(randomIndex)
      console.log(toChange)
      
        let base = dnaBases.filter(base => base != toChange)
        console.log(base)
        let newBase = base[Math.floor(Math.random() * 3)]
        console.log(newBase)
        dna[randomIndex] = newBase
        return dna
        
    },
    compareDNA (pAequorObject) {
      let count = 0
      //console.log(dna)
      //console.log(pAequorObject.dna)
      for (let i = 0; i < 15; i++)
      
      if(this.dna[i] == pAequorObject.dna[i]) {
        //console.log(i)
        count++
        
      } //console.log(count)
      let totalPercentage = Math.floor((count / 15) * 100)
      console.log(`Specimen no.${this.specimenNum} and specimen no.${pAequorObject.specimenNum} have ${totalPercentage}% DNA in common.`)
    }, 
    willLikelySurvive () {
      totalCount = (dna.filter (base => base === 'G')).length + (dna.filter ((base)=> base === 'C')).length
      totalPercentage = Math.floor((totalCount/15) * 100)
      //console.log(totalCount)
      //console.log(totalPercentage)
      if (totalPercentage >= 60){
        return true
      } else {
        return false
      }
    },
    complementStrand() {
      console.log(dna)
      let complementStrandArray = []
      for (let i = 0; i < 15; i++){
        dnaBase = dna[i]
        switch (dnaBase){
          case 'A':
            complementStrandArray.push('T')
            break
          case 'T':
            complementStrandArray.push('A')
            break
          case 'C': 
            complementStrandArray.push('G')
            break
          case 'G':
             complementStrandArray.push('C')
             break
        } 
      } console.log(complementStrandArray)
    }

  } 
}


let arrayOfPAequor = []
let newNum = 1
for (let i = 0; newNum <= 30; i++) {
  let newObj = pArquorFactory(newNum, mockUpStrand())
  if (newObj.willLikelySurvive() == true) {
     arrayOfPAequor.push(newObj)
  } else{
    continue
  }
  newNum++
}

//console.log(arrayOfPAequor)
let pAequor = pArquorFactory(31, mockUpStrand())
console.log(pAequor.complementStrand())


export const repositoriesDTOMock = {
    "repositories": [
    { 
      id: 1,
      state: 604
    },
    { id: 2,
      state: 605 
    },
    {
      id: 3,
      state: 606
    }]
}

export const repositoriesORMMock = [
  { 
    id: 1,
  },
  { id: 2,
  },
  {
    id: 3,
  }]

export const organizationDTOMock = {
    name: "Banco Pichincha",
    status: 1
}

export const metricsRepo = {
  "repositories": [
      {
          "id": "3",
          "name": "cd-common-tech",
          "tribe": "Centro Digital",
          "organization": "Banco Pichincha tres",
          "coverage": 90,
          "codeSmells": 9,
          "bugs": 10,
          "vulnerabilities": 7,
          "hotspots": 1,
          "verificationState": "Verificado",
          "state": "Enable"
      }
  ]
}

export const metricsORMMock = [{
  id: 3,
  name: 'cd-common-tech',
  state: 'E',
  tribu: {
    name: 'Centro Digital',
    organization: { id: 1, name: 'Banco Pichincha tres', status: 1 }
  },
  metrics: [
    {
      id: 2,
      coverage: 90,
      bugs: 10,
      vulnerabilities: 7,
      hotspot: 1,
      code_smells: 9,
      repositoryId: 3
    }
  ]
}]

export const bodyCvsStr = "3,cd-common-tech,Centro Digital,Banco Pichincha tres,90,9,10,7,1,Verificado,Enable\r\n"

    
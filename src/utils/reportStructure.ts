export const csvDataHeder = ["id", "name", "tribe", "organization", "coverage", 
"codeSmells", "bugs", "vulnerabilities", "hotspots", "verificationState", "state"].join(",") + "\r\n"


export const bodyReport = (repos)=>{
    let csvData = ""
    repos.forEach((repos) => {
        csvData += [repos.id, repos.name, repos.tribe, repos.organization, repos.coverage, 
            repos.codeSmells, repos.bugs, repos.vulnerabilities, repos.hotspots, 
            repos.verificationState, repos.state].join(",") + "\r\n"
      })
    return csvData
}


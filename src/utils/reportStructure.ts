export const csvDataHeder =
  [
    'id',
    'name',
    'tribe',
    'organization',
    'coverage',
    'codeSmells',
    'bugs',
    'vulnerabilities',
    'hotspots',
    'verificationState',
    'state',
  ].join(',') + '\r\n';

export const bodyReport = (repos): string => {
  let csvData = '';
  repos.forEach((repo) => {
    csvData +=
      [
        repo.id,
        repo.name,
        repo.tribe,
        repo.organization,
        repo.coverage,
        repo.codeSmells,
        repo.bugs,
        repo.vulnerabilities,
        repo.hotspots,
        repo.verificationState,
        repo.state,
      ].join(',') + '\r\n';
  });
  return csvData;
};

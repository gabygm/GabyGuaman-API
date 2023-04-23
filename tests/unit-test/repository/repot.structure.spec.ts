import { bodyReport } from "../../../src/utils/reportStructure";
import { bodyCvsStr, metricsRepo } from "../../../tests/mocks";


describe('report repository mapper cases', () => {
    it('should parse arrar repos to csv', () => {
        const csv_body = bodyReport(metricsRepo.repositories)
        expect(csv_body).toStrictEqual(bodyCvsStr);
    });
});
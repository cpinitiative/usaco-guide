import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

type DivisionTableQueryInfo = {
  division: string;
  season: string;
  showSols: boolean;
};

export type DivisionTableQueryAPI = {
  divisionTableQuery: DivisionTableQueryInfo;
  setDivisionTableQuery: (b: DivisionTableQueryInfo) => void;
};

export default class DivisionTableQuery extends SimpleUserDataPropertyAPI {
  protected storageKey = 'divisionTableQuery';
  protected defaultValue = {
    division: 'Bronze',
    season: '2019 - 2020',
    showSols: false,
  };
  protected setterFunctionName = 'setDivisionTableQuery';
}

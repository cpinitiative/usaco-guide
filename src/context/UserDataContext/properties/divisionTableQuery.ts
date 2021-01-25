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
    division: '',
    season: '',
    showSols: false,
  };
  protected setterFunctionName = 'setDivisionTableQuery';
}

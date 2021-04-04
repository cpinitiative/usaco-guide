import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

type DivisionTableQueryInfo = {
  division: string;
  season: string;
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
  };
  protected setterFunctionName = 'setDivisionTableQuery';
}

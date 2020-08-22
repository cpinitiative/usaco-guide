import SimpleUserDataPropertyAPI from '../simpleUserDataPropertyAPI';

export type LastReadAnnouncementAPI = {
  lastReadAnnouncement: string;
  setLastReadAnnouncement: (announcementID: string) => void;
};

export default class LastReadAnnouncement extends SimpleUserDataPropertyAPI {
  protected storageKey = 'lastReadAnnouncement';
  protected defaultValue = false;
  protected setterFunctionName = 'setLastReadAnnouncement';
}

import api from './index';
import { Settings } from '@tryghost/content-api';


  export const getContentSettings = async() => {
      const contentSettings   = await api.settings.browse()
      .catch(err => {
          console.error(err);
      });
      const nav = contentSettings?.navigation;
      return nav;
  }
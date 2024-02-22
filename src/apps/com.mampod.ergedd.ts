import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mampod.ergedd',
  name: '儿歌点点',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.mampod.ergedd.ui.phone.activity.SplashActivity'],
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/14370280',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-播放器贴片广告',
      activityIds: ['com.mampod.ergedd.ui.phone.player.VideoPlayerActivityV5'],
      rules: [
        {
          matches: '[id="com.mampod.ergedd:id/rlayout_jump_paster"]',
          snapshotUrls: 'https://i.gkd.li/import/14370465',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-播放器横幅广告',
      activityIds: ['com.mampod.ergedd.ui.phone.player.VideoPlayerActivityV5'],
      rules: [
        {
          matches: '[id="com.mampod.ergedd:id/ad_native_close"]',
          snapshotUrls: 'https://i.gkd.li/import/14370465',
        },
      ],
    },
  ],
});

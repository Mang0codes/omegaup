import course_List from '../components/course/Mine.vue';
import { omegaup, OmegaUp } from '../omegaup';
import { types } from '../api_types';
import * as api from '../api';
import * as ui from '../ui';
import T from '../lang';
import Vue from 'vue';

OmegaUp.on('ready', () => {
  const payload = types.payloadParsers.CourseListMinePayload();
  const headerPayload = types.payloadParsers.CommonPayload();
  const courseList = new Vue({
    el: '#main-container',
    render: function (createElement) {
      return createElement('omegaup-course-list', {
        props: {
          courses: payload.courses,
          isMainUserIdentity: headerPayload?.isMainUserIdentity ?? false,
        },
      });
    },
    components: {
      'omegaup-course-list': course_List,
    },
  });
});

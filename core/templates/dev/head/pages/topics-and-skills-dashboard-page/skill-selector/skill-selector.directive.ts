// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Controller for the select skill viewer.
 */

require('domain/utilities/url-interpolation.service.ts');

angular.module('oppia').directive('selectSkill', [
  'UrlInterpolationService', function(UrlInterpolationService) {
    return {
      restrict: 'E',
      scope: {
        getSkillSummaries: '&skillSummaries',
        selectedSkillId: '='
      },
      templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
        '/pages/topics-and-skills-dashboard-page/skill-selector/' +
        'skill-selector.directive.html'),
      controller: [
        '$scope', '$uibModal', '$rootScope',
        function(
            $scope, $uibModal, $rootScope) {
          $scope.skillSummaries = $scope.getSkillSummaries();
          $scope.selectSkill = function(skillId) {
            $scope.selectedSkillId = skillId;
          };
        }
      ]
    };
  }]);

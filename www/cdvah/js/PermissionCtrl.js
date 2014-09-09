/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
*/
(function(){
    'use strict';

    /* global myApp */
    /* global chrome */
    myApp.controller('PermissionCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
        // By default, the checkbox should be checked.
        $scope.formData = { reportingPermissionCheckbox: true };

        $scope.saveReportingPermission = function() {
            // Save the permission, both globally and in local storage.
            $rootScope.reportingPermission = $scope.formData.reportingPermissionCheckbox;
            chrome.storage.local.set({ reportingPermission: $scope.formData.reportingPermissionCheckbox });

            // If we're here, we tried to report a launch, but failed since we hadn't asked for permission.
            // So we want to try again.
            $rootScope.appLaunchReported = false;
        };
    }]);
})();

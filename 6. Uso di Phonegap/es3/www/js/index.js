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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("prima di jquery");
        $(function() { 
            $.ajax({
                method: 'post', url:"https://ewserver.di.unimi.it/mobicomp/mostri/ranking.php",
                data: JSON.stringify({session_id : 'zqfQaL0q6TKACDrP'}),
                dataType: 'json',
                success: function(result) {
                    for(let x of result.ranking){
                        let username
        
                        console.log(x)
                        if(x.username == null || x.username == undefined || x.username == ""){
                            username = "username non inserito"
                        } else {
                            username = x.username
                        }
                        if(x.img == null || x.img == undefined || x.img == ""){
                            $("#players").append("<li>"+username+": "+x.xp+"; immagine del profilo non inserita</li>");
                        } else {
                            $("#players").append("<li>"+username+": "+x.xp+" <img src='data:image/png;base64," + x.img + "' height='100' width='100'/></li>");
                        }
                        
                        
                        
                    }
                },
                error: function(error) { 
                    console.error(error);
                }
            }); 
        });
    },

};

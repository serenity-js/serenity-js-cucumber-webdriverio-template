window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "Cucumber",
    "totalScenarios": 1,
    "outcomes": {
      "passed": 1,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 3144,
    "startedAt": "2026-08-20T02:43:42.975Z",
    "finishedAt": "2026-08-20T02:43:46.119Z",
    "testRunner": "Cucumber"
  },
  "scenarios": [
    {
      "name": "Using username and password to log in",
      "category": "Form-Based Authentication",
      "outcome": "SUCCESS",
      "duration": 3144,
      "startedAt": "2026-08-20T02:43:42.975Z",
      "source": {
        "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
        "line": 24
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 152.0.7977.54"
        },
        {
          "type": "platform",
          "name": "linux"
        },
        {
          "type": "capability",
          "name": "Authentication"
        },
        {
          "type": "feature",
          "name": "Form-Based Authentication"
        },
        {
          "type": "module",
          "name": "serenity-js-cucumber-webdriverio-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2228",
          "timestamp": "2026-08-20T02:43:42.975Z",
          "duration": 3144,
          "activities": []
        }
      ],
      "narrative": "<p>In order to learn how to use Serenity/JS with Cucumber and WebdriverIO\nAs a Curious Developer\nI&#39;d like to see an example</p>\n",
      "description": "<p><a href=\"https://the-internet.herokuapp.com/\">&quot;The Internet&quot;</a> is an example application\nthat captures prominent and ugly functionality found on the web.\nPerfect for writing automated acceptance tests against 😎\nWith <strong>Serenity/JS</strong> you can use <a href=\"https://en.wikipedia.org/wiki/Markdown\">Markdown</a>\nto better describe each <code>Feature</code> and <code>Scenario</code>.</p>\n",
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithWebdriverIO"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://the-internet.herokuapp.com/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "scenarioOutline": {
        "template": "When she logs in using \"<username>\" and \"<password>\"\nThen she should see that authentication has <outcome>",
        "parameters": [
          {
            "name": "",
            "values": {
              "username": "tomsmith",
              "password": "SuperSecretPassword!",
              "outcome": "succeeded"
            },
            "outcome": "SUCCESS",
            "duration": 2035,
            "activities": [
              {
                "name": "Given Alice starts with the \"Form Authentication\" example",
                "outcome": "SUCCESS",
                "duration": 1508,
                "children": [
                  {
                    "name": "Alice navigates to \"/\"",
                    "outcome": "SUCCESS",
                    "duration": 816,
                    "children": [],
                    "type": "Task",
                    "startedAt": "2026-08-20T02:43:40.959Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                      "line": 171,
                      "column": 33
                    }
                  },
                  {
                    "name": "Alice picks example called Form Authentication",
                    "outcome": "SUCCESS",
                    "duration": 652,
                    "children": [
                      {
                        "name": "Alice clicks on the first of available examples where Text does equal \"Form Authentication\"",
                        "outcome": "SUCCESS",
                        "duration": 641,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:41.787Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/examples/PickExample.ts",
                          "line": 13,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T02:43:41.786Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 17,
                      "column": 21
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T02:43:40.941Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 8
                }
              },
              {
                "name": "When she logs in using \"tomsmith\" and \"SuperSecretPassword!\"",
                "outcome": "SUCCESS",
                "duration": 219,
                "children": [
                  {
                    "name": "Alice logs in as tomsmith",
                    "outcome": "SUCCESS",
                    "duration": 202,
                    "children": [
                      {
                        "name": "Alice enters \"tomsmith\" into username field",
                        "outcome": "SUCCESS",
                        "duration": 49,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:42.456Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 20,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice enters \"SuperSecretPassword!\" into password field",
                        "outcome": "SUCCESS",
                        "duration": 43,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:42.516Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 21,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice clicks on login button",
                        "outcome": "SUCCESS",
                        "duration": 78,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:42.570Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 22,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T02:43:42.456Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 23,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T02:43:42.450Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 18
                }
              },
              {
                "name": "Then she should see that authentication has succeeded",
                "outcome": "SUCCESS",
                "duration": 278,
                "children": [
                  {
                    "name": "Alice verifies that authentication has succeeded",
                    "outcome": "SUCCESS",
                    "duration": 260,
                    "children": [
                      {
                        "name": "Alice verifies that flash alert is present",
                        "outcome": "SUCCESS",
                        "duration": 224,
                        "children": [
                          {
                            "name": "Alice ensures that flash message does become visible",
                            "outcome": "SUCCESS",
                            "duration": 213,
                            "children": [],
                            "type": "Task",
                            "startedAt": "2026-08-20T02:43:42.679Z",
                            "location": {
                              "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                              "line": 171,
                              "column": 33
                            }
                          }
                        ],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:42.678Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/VerifyAuthentication.ts",
                          "line": 15,
                          "column": 34
                        }
                      },
                      {
                        "name": "Alice ensures that the text of flash message does include \"You logged into a secure area!\"",
                        "outcome": "SUCCESS",
                        "duration": 14,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:42.913Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                          "line": 135,
                          "column": 16
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T02:43:42.678Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 36,
                      "column": 45
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T02:43:42.670Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 19
                }
              }
            ]
          },
          {
            "name": "",
            "values": {
              "username": "foobar",
              "password": "barfoo",
              "outcome": "failed"
            },
            "outcome": "SUCCESS",
            "duration": 1109,
            "activities": [
              {
                "name": "Given Alice starts with the \"Form Authentication\" example",
                "outcome": "SUCCESS",
                "duration": 660,
                "children": [
                  {
                    "name": "Alice navigates to \"/\"",
                    "outcome": "SUCCESS",
                    "duration": 108,
                    "children": [],
                    "type": "Task",
                    "startedAt": "2026-08-20T02:43:42.984Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                      "line": 171,
                      "column": 33
                    }
                  },
                  {
                    "name": "Alice picks example called Form Authentication",
                    "outcome": "SUCCESS",
                    "duration": 524,
                    "children": [
                      {
                        "name": "Alice clicks on the first of available examples where Text does equal \"Form Authentication\"",
                        "outcome": "SUCCESS",
                        "duration": 513,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:43.103Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/examples/PickExample.ts",
                          "line": 13,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T02:43:43.102Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 17,
                      "column": 21
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T02:43:42.977Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 8
                }
              },
              {
                "name": "When she logs in using \"foobar\" and \"barfoo\"",
                "outcome": "SUCCESS",
                "duration": 193,
                "children": [
                  {
                    "name": "Alice logs in as foobar",
                    "outcome": "SUCCESS",
                    "duration": 177,
                    "children": [
                      {
                        "name": "Alice enters \"foobar\" into username field",
                        "outcome": "SUCCESS",
                        "duration": 35,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:43.643Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 20,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice enters \"barfoo\" into password field",
                        "outcome": "SUCCESS",
                        "duration": 36,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:43.689Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 21,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice clicks on login button",
                        "outcome": "SUCCESS",
                        "duration": 75,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:43.735Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 22,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T02:43:43.643Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 23,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T02:43:43.638Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 18
                }
              },
              {
                "name": "Then she should see that authentication has failed",
                "outcome": "SUCCESS",
                "duration": 231,
                "children": [
                  {
                    "name": "Alice verifies that authentication has failed",
                    "outcome": "SUCCESS",
                    "duration": 215,
                    "children": [
                      {
                        "name": "Alice verifies that flash alert is present",
                        "outcome": "SUCCESS",
                        "duration": 176,
                        "children": [
                          {
                            "name": "Alice ensures that flash message does become visible",
                            "outcome": "SUCCESS",
                            "duration": 167,
                            "children": [],
                            "type": "Task",
                            "startedAt": "2026-08-20T02:43:43.839Z",
                            "location": {
                              "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                              "line": 171,
                              "column": 33
                            }
                          }
                        ],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:43.839Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/VerifyAuthentication.ts",
                          "line": 21,
                          "column": 34
                        }
                      },
                      {
                        "name": "Alice ensures that the text of flash message does include \"Your username is invalid!\"",
                        "outcome": "SUCCESS",
                        "duration": 16,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T02:43:44.026Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                          "line": 135,
                          "column": 16
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T02:43:43.838Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 36,
                      "column": 45
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T02:43:43.832Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 19
                }
              }
            ]
          }
        ]
      }
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-20T02:43:42.975Z",
      "duration": 3144,
      "outcomes": {
        "passed": 1,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2228",
      "slowest": 3144,
      "fastest": 3144,
      "average": 3144,
      "commit": "8eb3233f59c1f899faf483aea2d34fb04750413f",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template/actions/runs/32325576226",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "browser",
      "name": "chrome 152.0.7977.54",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "platform",
      "name": "linux",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "capability",
      "name": "Authentication",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Form-Based Authentication",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-cucumber-webdriverio-template",
      "scenarioCount": 1,
      "passed": 1,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.19.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.45.8",
    "testRunner": {
      "name": "Cucumber",
      "version": "13.2.1"
    },
    "browsers": [
      {
        "name": "chrome",
        "version": "152.0.7977.54"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2228",
      "branch": "main",
      "commit": "8eb3233f59c1f899faf483aea2d34fb04750413f",
      "commitMessage": "Merge pull request #924 from serenity-js/chore/remove-failsafe-rimraf",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template/actions/runs/32325576226",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template",
      "triggeredBy": "jan-molak"
    },
    "projectName": "serenity-js-cucumber-webdriverio-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "features",
    "outcomes": {
      "passed": 1,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 1,
    "children": [
      {
        "type": "directory",
        "name": "authentication",
        "outcomes": {
          "passed": 1,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 1,
        "children": [
          {
            "type": "file",
            "name": "form-based_authentication",
            "outcomes": {
              "passed": 1,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 1,
            "scenarios": [
              {
                "name": "Using username and password to log in",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "In order to learn how to use Serenity/JS with Cucumber and WebdriverIO\nAs a Curious Developer\nI'd like to see an example",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        },
        "readme": "<p>The Internet - Authentication</p>\n<p>Narrative:\nIn order to learn how to implement <em>high-quality automated tests</em>\nAs a Curious Developer\nI&#39;d like to have a place to practice</p>\n<p>This note is called <em>&quot;the narrative&quot;</em>. It can be used to provide the context around the business capability of your\nproduct (&quot;Authentication&quot; features in this case) and its features that help to enable this capability.</p>\n<p><strong>Please note:</strong> While <a href=\"https://github.com/cucumber/cucumber-js\" target=\"_blank\" rel=\"noopener\">Cucumber</a> allows you to capture a description\nof each feature in the <code>.feature</code> file, <a href=\"https://serenity-js.org\" target=\"_blank\" rel=\"noopener\">Serenity/JS</a> allows you to group those <code>.feature</code>\nfiles in directories corresponding to &quot;epics&quot;, &quot;themes&quot; or &quot;business capabilities&quot; of your system and provide\neach one of those with additional context using this <code>narrative.md</code> file.</p>\n<p><strong>By the way:</strong> Did you notice that you can use <strong><a href=\"https://www.markdownguide.org/\" target=\"_blank\" rel=\"noopener\">markdown syntax</a></strong> to better express\nyour thoughts?</p>\n"
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "features"
};

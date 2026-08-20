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
    "duration": 2275,
    "startedAt": "2026-08-20T11:11:13.181Z",
    "finishedAt": "2026-08-20T11:11:15.456Z",
    "testRunner": "Cucumber"
  },
  "scenarios": [
    {
      "name": "Using username and password to log in",
      "category": "Form-Based Authentication",
      "outcome": "SUCCESS",
      "duration": 2275,
      "startedAt": "2026-08-20T11:11:13.181Z",
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
          "run": "2230",
          "timestamp": "2026-08-20T11:11:13.181Z",
          "duration": 2275,
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
            "duration": 1268,
            "activities": [
              {
                "name": "Given Alice starts with the \"Form Authentication\" example",
                "outcome": "SUCCESS",
                "duration": 849,
                "children": [
                  {
                    "name": "Alice navigates to \"/\"",
                    "outcome": "SUCCESS",
                    "duration": 223,
                    "children": [],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:11:11.931Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                      "line": 171,
                      "column": 33
                    }
                  },
                  {
                    "name": "Alice picks example called Form Authentication",
                    "outcome": "SUCCESS",
                    "duration": 588,
                    "children": [
                      {
                        "name": "Alice clicks on the first of available examples where Text does equal \"Form Authentication\"",
                        "outcome": "SUCCESS",
                        "duration": 576,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:12.165Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/examples/PickExample.ts",
                          "line": 13,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:11:12.164Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 17,
                      "column": 21
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:11:11.914Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 8
                }
              },
              {
                "name": "When she logs in using \"tomsmith\" and \"SuperSecretPassword!\"",
                "outcome": "SUCCESS",
                "duration": 283,
                "children": [
                  {
                    "name": "Alice logs in as tomsmith",
                    "outcome": "SUCCESS",
                    "duration": 265,
                    "children": [
                      {
                        "name": "Alice enters \"tomsmith\" into username field",
                        "outcome": "SUCCESS",
                        "duration": 44,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:12.772Z",
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
                        "startedAt": "2026-08-20T11:11:12.827Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 21,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice clicks on login button",
                        "outcome": "SUCCESS",
                        "duration": 147,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:12.880Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 22,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:11:12.772Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 23,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:11:12.764Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 18
                }
              },
              {
                "name": "Then she should see that authentication has succeeded",
                "outcome": "SUCCESS",
                "duration": 106,
                "children": [
                  {
                    "name": "Alice verifies that authentication has succeeded",
                    "outcome": "SUCCESS",
                    "duration": 87,
                    "children": [
                      {
                        "name": "Alice verifies that flash alert is present",
                        "outcome": "SUCCESS",
                        "duration": 51,
                        "children": [
                          {
                            "name": "Alice ensures that flash message does become visible",
                            "outcome": "SUCCESS",
                            "duration": 41,
                            "children": [],
                            "type": "Task",
                            "startedAt": "2026-08-20T11:11:13.056Z",
                            "location": {
                              "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                              "line": 171,
                              "column": 33
                            }
                          }
                        ],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:13.056Z",
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
                        "startedAt": "2026-08-20T11:11:13.118Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                          "line": 135,
                          "column": 16
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:11:13.056Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 36,
                      "column": 45
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:11:13.048Z",
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
            "duration": 1007,
            "activities": [
              {
                "name": "Given Alice starts with the \"Form Authentication\" example",
                "outcome": "SUCCESS",
                "duration": 576,
                "children": [
                  {
                    "name": "Alice navigates to \"/\"",
                    "outcome": "SUCCESS",
                    "duration": 67,
                    "children": [],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:11:13.190Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                      "line": 171,
                      "column": 33
                    }
                  },
                  {
                    "name": "Alice picks example called Form Authentication",
                    "outcome": "SUCCESS",
                    "duration": 480,
                    "children": [
                      {
                        "name": "Alice clicks on the first of available examples where Text does equal \"Form Authentication\"",
                        "outcome": "SUCCESS",
                        "duration": 470,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:13.268Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/examples/PickExample.ts",
                          "line": 13,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:11:13.268Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 17,
                      "column": 21
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:11:13.183Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 8
                }
              },
              {
                "name": "When she logs in using \"foobar\" and \"barfoo\"",
                "outcome": "SUCCESS",
                "duration": 194,
                "children": [
                  {
                    "name": "Alice logs in as foobar",
                    "outcome": "SUCCESS",
                    "duration": 177,
                    "children": [
                      {
                        "name": "Alice enters \"foobar\" into username field",
                        "outcome": "SUCCESS",
                        "duration": 36,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:13.765Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 20,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice enters \"barfoo\" into password field",
                        "outcome": "SUCCESS",
                        "duration": 37,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:13.811Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 21,
                          "column": 38
                        }
                      },
                      {
                        "name": "Alice clicks on login button",
                        "outcome": "SUCCESS",
                        "duration": 73,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:13.859Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/Authenticate.ts",
                          "line": 22,
                          "column": 19
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:11:13.765Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 23,
                      "column": 22
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:11:13.759Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/authentication/form-based_authentication.feature",
                  "line": 18
                }
              },
              {
                "name": "Then she should see that authentication has failed",
                "outcome": "SUCCESS",
                "duration": 213,
                "children": [
                  {
                    "name": "Alice verifies that authentication has failed",
                    "outcome": "SUCCESS",
                    "duration": 192,
                    "children": [
                      {
                        "name": "Alice verifies that flash alert is present",
                        "outcome": "SUCCESS",
                        "duration": 158,
                        "children": [
                          {
                            "name": "Alice ensures that flash message does become visible",
                            "outcome": "SUCCESS",
                            "duration": 147,
                            "children": [],
                            "type": "Task",
                            "startedAt": "2026-08-20T11:11:13.965Z",
                            "location": {
                              "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                              "line": 171,
                              "column": 33
                            }
                          }
                        ],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:13.964Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/test/authentication/VerifyAuthentication.ts",
                          "line": 21,
                          "column": 34
                        }
                      },
                      {
                        "name": "Alice ensures that the text of flash message does include \"Your username is invalid!\"",
                        "outcome": "SUCCESS",
                        "duration": 14,
                        "children": [],
                        "type": "Task",
                        "startedAt": "2026-08-20T11:11:14.132Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/node_modules/@serenity-js/cucumber/src/adapter/CucumberCLIAdapter.ts",
                          "line": 135,
                          "column": 16
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-20T11:11:13.964Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-webdriverio-template/serenity-js-cucumber-webdriverio-template/features/step-definitions/the-internet.steps.ts",
                      "line": 36,
                      "column": 45
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-20T11:11:13.954Z",
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
      "timestamp": "2026-08-20T11:11:13.181Z",
      "duration": 2275,
      "outcomes": {
        "passed": 1,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2230",
      "slowest": 2275,
      "fastest": 2275,
      "average": 2275,
      "commit": "b5e82eb94822c5a9974266b4d0043b2184309d6b",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template/actions/runs/32362466807",
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
      "buildNumber": "2230",
      "branch": "main",
      "commit": "b5e82eb94822c5a9974266b4d0043b2184309d6b",
      "commitMessage": "Merge pull request #925 from serenity-js/docs/add-documentation-links",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template/actions/runs/32362466807",
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

module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-githooks');
    grunt.loadNpmTasks('grunt-script-link-tags');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.initConfig({
        assetsDir: 'app',
        distDir: 'dist',
        asapDir: './fakeASAP',
        asapComponentName: 'exampleComponent',
        availabletasks: {
            tasks: {
                options: {
                    filter: 'include',
                    groups: {
                        'Development': ['dev'],
                        'Production': ['package'],
                        'Continuous Integration': ['ci']
                    },
                    sort: [
                        'dev',
                        'test:unit',
                        'test:e2e',
                        'report',
                        'package',
                        'ci'
                    ],
                    descriptions: {
                        'dev': 'Launch the static server and watch tasks',
                        'package': 'Package your web app for distribution',
                        'ci': 'Run unit & e2e tests, package your webapp and generate reports. Use this task for Continuous Integration'
                    },
                    tasks: [
                        'dev',
                        'test:unit',
                        'test:e2e',
                        'report',
                        'package',
                        'ci'
                    ]
                }
            }
        },
        tags: {
            build: {
                options: {
                    scriptTemplate: '<script src="{{ path }}"></script>',
                    openTag: '<!-- start template tags -->',
                    closeTag: '<!-- end template tags -->'
                },
                src: [
                    '<%= assetsDir %>/**/*.js',
                    '!<%= assetsDir %>/vendor/**/*.js'
                ],
                dest: '<%= assetsDir %>/index.html'
            }
        },
        githooks: {
            all: {
                // Will run the jshint and test:unit tasks at every commit
                // 'pre-push': 'karma:dev_unit:start',
            }
        },
        wiredep: {
            target: {
                src: '<%= assetsDir %>/index.html',
                ignorePath: '<%= assetsDir %>/',
                jsPattern: '<script type="text/javascript" src="{{filePath}}"></script>',
                cssPattern: '<link rel="stylesheet" href="{{filePath}}" >'
            }
        },
        clean: {
            dist: [
                '.tmp',
                '<%= distDir %>'
            ]
        },
        ngdocs: {
            options: {
                dest: '<%= distDir %>/docs',
                html5Mode: false,
                startPage: '/api/<%= asapComponentName %>',
                scripts: [
                    '<%= assetsDir %>/vendor/angular/angular.js'
                ]
            },
            api: {
                src: ['<%= assetsDir%>/js/**/*.js'],
                title: 'Docs'
            }

        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= assetsDir %>',
                    dest: '<%= distDir %>/',
                    src: [
                        'index.html',
                        'img/**',
                        'etc/designs/shc/dynamicCampaignComponent/partials/*',
                        'js/author.js',
                        'vendor/angular/angular.js'
                    ]
                }]
            },
            toasap: {
                files: [
                {
                    expand: true,
                    src: ['<%= distDir %>/js/*.js'],
                    dest: '<%= asapDir %>/aem-vault/jcr_root/etc/designs/shc/<%= asapComponentName %>/clientlibs/js/',
                    flatten: true,
                    filter: 'isFile'
                }, {
                    expand: true,
                    src: ['<%= distDir %>/css/*.css'],
                    dest: '<%= asapDir %>/aem-vault/jcr_root/etc/designs/shc/<%= asapComponentName %>/clientlibs/css/',
                    flatten: true,
                    filter: 'isFile'
                }, {
                    expand: true,
                    cwd: '<%= assetsDir %>',
                    src: '**/*.html',
                    dest: '<%= asapDir %>/aem-vault/jcr_root/etc/designs/shc/<%= asapComponentName %>/partials',
                    flatten: true,
                    filter: 'isFile'
                }]
            },
            toasapjenkins: {
                files: [{
                    src: ['dist/js/*.js'],
                    dest: '../ASAP-QA/aem-vault/jcr_root/etc/designs/shc/**/clientlibs/js'
                }, {
                    expand: true,
                    cwd: 'dist/etc',
                    src: ['**'],
                    dest: '../ASAP-QA/aem-vault/jcr_root/etc/'
                }, {
                    src: ['dist/css/*.css'],
                    dest: '../ASAP-QA/aem-vault/jcr_root/etc/designs/shc/**/clientli\bs/css'
                }]
            }
        },
        ngAnnotate: {
            options: {},
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/js',
                    src: '*.js',
                    dest: '.tmp/concat/js'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeComments: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= distDir %>',
                    src: [
                        'index.html',
                        '**/*.html'
                    ],
                    dest: '<%= distDir %>'
                }]
            }
        },
        useminPrepare: {
            html: '<%= assetsDir %>/index.html',
            options: {
                dest: '<%= distDir %>'
            }
        },
        usemin: {
            html: '<%= distDir %>/index.html'
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '<%= assetsDir %>/**/*.html',
                        '<%= assetsDir %>/**/*.js',
                        '<%= assetsDir %>/**/*.css'
                    ]
                },
                options: {
                    watchTask: true,
                    open: false,
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: false,
                        // must be false to avoid interfering with angular routing
                        forms: true
                    },
                    server: {
                        baseDir: '<%= assetsDir %>'
                    }
                }
            },
            prod: {
                bsFiles: {
                    src: [
                        '<%= assetsDir %>/**/*.html',
                        '<%= assetsDir %>/**/*.js',
                        '<%= assetsDir %>/**/*.css'
                    ]
                },
                options: {
                    watchTask: true,
                    open: false,
                    server: {
                        baseDir: '<%= distDir %>'
                    }
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: {
                src: ['<%= assetsDir %>/js/**/*.js']
            }
        },
        watch: {
            less: {
                files: ['<%= assetsDir %>/**/*.less'],
                tasks: ['less:all']
            }
        },
        connect: {
            plato: {
                options: {
                    port: 8889,
                    base: 'dist/docs',
                    keepalive: true,
                    open: true
                }
            }
        },
        less: {
            options: {
                paths: ['<%= assetsDir %>/**/*.less']
            },
            all: {
                files: {
                    '<%= assetsDir %>/global/app.css': '<%= assetsDir %>/global/app.less'
                }
            }
        },
        plato: {
            options: {
                jshint: grunt.file.readJSON('.jshintrc'),
                title: '<%= name %>'
            },
            all: {
                files: {
                    'reports/complexity': ['<%= assetsDir %>/js/**/*.js']
                }
            }
        },
        karma: {
            dist_unit: {
                options: {
                    configFile: 'test/conf/unit-test-conf-dist.js',
                    background: false,
                    singleRun: true,
                    autoWatch: true,
                    reporters: ['progress']
                }
            },
            dev_unit: {
                options: {
                    configFile: 'test/conf/unit-test-conf-dev.js',
                    background: false,
                    singleRun: true,
                    autoWatch: false,
                    reporters: [
                        'progress',
                        'coverage'
                    ],
                    coverageReporter: {
                        type: 'html',
                        dir: '../reports/coverage'
                    }
                }
            },
            e2e: {
                options: {
                    configFile: 'test/conf/e2e-test-conf.js'
                }
            }
        }
    });
    grunt.registerTask('ls', ['availabletasks']);
    grunt.registerTask('package', [
        'jshint',
        'clean',
        'useminPrepare',
        'copy',
        'concat',
        'ngAnnotate',
        'uglify',
        'less',
        'cssmin',
        'usemin' //,
        //'htmlmin'
    ]);
    grunt.registerTask('ci', [
        'package',
        'connect:test',
        'karma:dist_unit:start',
        'karma:e2e',
        'plato'
    ]);
    grunt.registerTask('dev', [
        'githooks',
        'less',
        'tags',
        'browserSync:dev',
        //'karma:dev_unit:start',
        'watch'
    ]);
    grunt.registerTask('prod', [
        'package',
        'browserSync:prod',
        //'karma:dev_unit:start',
        'watch'
    ]);
    grunt.registerTask('report', [
        'plato',
        'connect:plato'
    ]);
    grunt.registerTask('test:e2e', [
        'connect:test',
        'karma:e2e'
    ]);
    grunt.registerTask('test:unit', ['package','karma:dist_unit:start']);
    grunt.registerTask('gen:doc', ['clean', 'ngdocs', 'connect:plato']);
};
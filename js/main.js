$(document).ready(() => {
    /*
     * 'en': 0
     * 'zh_tw': 1
     */
    let lang_id = 0;

    /*
     * Project contents.
     */
    const project_1 = {
        'title': {
            'en': '<a href="https://docs.google.com/presentation/d/1797idRRmgeD2JnUslGbflmGUO2X5lMY6/edit?usp=drive_link&ouid=101248488395326982475&rtpof=true&sd=true" target="_blank">Chord learning and adversarial framework for symbolic music generation</a>', 
            'zh_tw': '<a href="https://docs.google.com/presentation/d/1797idRRmgeD2JnUslGbflmGUO2X5lMY6/edit?usp=drive_link&ouid=101248488395326982475&rtpof=true&sd=true" target="_blank">基於生成對抗網路的古箏自動編曲系統</a>'
        }, 
        'main': {
            'en': [
                'Proposed a chord learning framework for multi-track symbolic music generation based on VAE and GAN.', 
                'Introduced <a href="https://arxiv.org/abs/1704.00028" target="_blank">WGAN-GP</a> to solve mode collapse and vanishing gradient problem.', 
            ], 
            'zh_tw': [
                '基於變分自動編碼器 (VAE) 和生成對抗網路 (GAN)，提出一個生成多音軌符號 (symbolic) 音樂的框架。', 
                '引入 <a href="https://arxiv.org/abs/1704.00028" target="_blank">WGAN-GP</a> 解決模式崩壞 (mode collapse) 以及梯度消失 (vanishing gradient) 問題。', 
            ]
        },
        'period': {
            'en': '04 2018 - 05 2019',
            'zh_tw': '04 2018 - 05 2019',
        }, 
        'location': {
            'en': 'Hangzhou, China', 
            'zh_tw': '杭州, 中國'
        }
    };
    const project_2 = {
        'title': {
            'en': '<a href="https://drive.google.com/file/d/1736XHtaeT58FL_gbOa9XjlyA6xAXDkg2/view?usp=drive_link" target="_blank">Voice Conversion Based on Generative Adversarial Networks</a>', 
            'zh_tw': '<a href="https://drive.google.com/file/d/1736XHtaeT58FL_gbOa9XjlyA6xAXDkg2/view?usp=drive_link" target="_blank">基於生成對抗網路的語音轉換研究</a>' 
        }, 
        'main': {
            'en': [
                'Improved <a href="https://arxiv.org/abs/1907.12279" target="_blank">StarGAN-VC2</a> based on multi-speaker non-parallel corpus.', 
                'Introduced <a href="https://arxiv.org/abs/1712.01026" target="_blank">WGAN-div</a>, <a href="https://arxiv.org/abs/1703.06868" target="_blank">AdaIN</a> layer, and neural vocoder, <a href="https://arxiv.org/abs/1811.00002" target="_blank">WaveGlow</a>, for better generated audio quality.', 
            ], 
            'zh_tw': [
                '在多語者 (multi-speaker) 非平行語料庫 (non-parallel corpus) 基礎上改進 <a href="https://arxiv.org/abs/1907.12279" target="_blank">StarGAN-VC2</a>。', 
                '引入 <a href="https://arxiv.org/abs/1712.01026" target="_blank">WGAN-div</a>, <a href="https://arxiv.org/abs/1703.06868" target="_blank">AdaIN</a> 層和 <a href="https://arxiv.org/abs/1811.00002" target="_blank">WaveGlow</a> 神經聲碼器 (neural vocoder)，提升生成的語音品質。', 
            ]
        }, 
        'period': {
            'en': '03 2020 - 05 2020',
            'zh_tw': '03 2020 - 05 2020',
        }, 
        'location': {
            'en': 'Hangzhou, China', 
            'zh_tw': '杭州, 中國'
        }
    };
    const project_3 = {
        'title': {
            'en': '<a href="https://drive.google.com/file/d/176xCWH6j0VAuoXLtB_HppxyZN-6ezq9_/view?usp=drive_link" target="_blank">SurrogateFlow: Synthetic Data Generation using Conditional Normalizing Flows</a>', 
            'zh_tw': '<a href="https://drive.google.com/file/d/176xCWH6j0VAuoXLtB_HppxyZN-6ezq9_/view?usp=drive_link" target="_blank">SurrogateFlow: Synthetic Data Generation using Conditional Normalizing Flows</a>' 
        }, 
        'main': {
            'en': [
                'Ability to replace original datasets and maintain same data distribution, and also highlight outliers for analysis.', 
                'Built a browser-server web application to visualize results.', 
            ], 
            'zh_tw': [
                '提出一個條件正規化流 (CNF) 模型，用於替換原始資料集，並生成新的資料集，同時能強調異常值 (outlier)。', 
                '建立一個瀏覽器-伺服器 (browser-server) 網路應用，用於視覺化結果。'
            ]
        }, 
        'period': {
            'en': '03 2023 - 05 2023',
            'zh_tw': '03 2023 - 05 2023',
        }, 
        'location': {
            'en': 'Hsinchu, Taiwan', 
            'zh_tw': '新竹, 臺灣'
        }
    };
    const project_4 = {
        'title': {
            'en': 'Floating image quality compensation algorithm technology', 
            'zh_tw': '立體浮空影像品質補償演算法技術' 
        }, 
        'main': {
            'en': [
                'Improved image quality of poorly captured floating images due to hardware tolerance based on CNNs.', 
                'Ability to train and employ on different devices.', 
            ], 
            'zh_tw': [
                '提出一個基於卷積神經網路 (CNN) 的浮空影像品質補償演算法，用於解決硬體缺陷問題，提升浮空影像的品質。', 
                '可以在不同的硬體上訓練和部署。', 
            ]
        }, 
        'period': {
            'en': '06 2023 - 12 2023 (Expected)',
            'zh_tw': '06 2023 - 12 2023 (Expected)',
        }, 
        'location': {
            'en': 'Hsinchu, Taiwan', 
            'zh_tw': '新竹, 臺灣'
        }
    };
    const projects = [
        project_1, 
        project_2, 
        project_3, 
        project_4
    ];

    /*
     * Award contents.
     */
    const award_1 = {
        'title': {
            'en': 'CCCC-Mobile Application Innovation Contest', 
            'zh_tw': '中國高校計算機大賽移動應用創新賽'
        }, 
        'prize': {
            'en': 'First Prize and Most Innovative Award', 
            'zh_tw': '一等獎、最具創新獎'
        }, 
        'period': {
            'en': '09 2018',
            'zh_tw': '09 2018',
        }, 
        'location': {
            'en': 'Hangzhou, China', 
            'zh_tw': '杭州, 中國'
        }
    };
    const award_2 = {
        'title': {
            'en': 'The 4th "Internet+" Innovation and Entrepreneurship Competition', 
            'zh_tw': '第四屆中國"互聯網+"大學生創新創業大賽'
        }, 
        'prize': {
            'en': 'Gold Award', 
            'zh_tw': '金獎'
        }, 
        'period': {
            'en': '09 2018',
            'zh_tw': '09 2018',
        }, 
        'location': {
            'en': 'Hangzhou, China', 
            'zh_tw': '杭州, 中國'
        }
    };
    const award_3 = {
        'title': {
            'en': 'Hong Kong, Macau, and Taiwan student scholarship', 
            'zh_tw': '港澳台學生獎學金'
        }, 
        'prize': {
            'en': 'Third Prize', 
            'zh_tw': '三等獎'
        }, 
        'period': {
            'en': '09 2018',
            'zh_tw': '09 2018',
        }, 
        'location': {
            'en': 'Hangzhou, China', 
            'zh_tw': '杭州, 中國'
        }
    };
    const award_4 = {
        'title': {
            'en': 'College Students\' Innovative Entrepreneurial Training Plan Program (SRTP)', 
            'zh_tw': '國家級大學生創新創業訓練計畫 (SRTP)' 
        }, 
        'prize': {
            'en': 'Excellent', 
            'zh_tw': '優秀'
        }, 
        'period': {
            'en': '04 2018 - 05 2019',
            'zh_tw': '04 2018 - 05 2019',
        }, 
        'location': {
            'en': 'Hangzhou, China', 
            'zh_tw': '杭州, 中國'
        }
    };
    const award_5 = {
        'title': {
            'en': 'Hong Kong, Macau, and Taiwan student scholarship', 
            'zh_tw': '港澳台學生獎學金'
        }, 
        'prize': {
            'en': 'Second Prize', 
            'zh_tw': '二等獎'
        }, 
        'period': {
            'en': '12 2019',
            'zh_tw': '12 2019',
        }, 
        'location': {
            'en': 'Hangzhou, China', 
            'zh_tw': '杭州, 中國'
        }
    };
    const awards = [
        award_1, award_2, award_3, award_4, award_5
    ];

    /*
     * Education contents.
     */
    const education_1 = {
        'school': {
            'en': 'Zhejiang University', 
            'zh_tw': '浙江大學'
        }, 
        'degree': {
            'en': 'Bachelor of Engineering in Computer Science and Technology', 
            'zh_tw': '計算機科學與技術學士'
        },
        'remark': {
            'en': 'Last two years GPA: 3.30/4.00', 
            'zh_tw': '最後兩年 GPA: 3.30/4.00'
        }, 
        'period': {
            'en': '09 2016 - 07 2020',
            'zh_tw': '09 2016 - 07 2020',
        }, 
        'location': {
            'en': 'Hangzhou, China', 
            'zh_tw': '杭州, 中國'
        }, 
        'school_hint': {
            'en': 'Ranked #44 according to QS World University Rankings 2024.', 
            'zh_tw': '根據 QS 2024 年世界大學排名，位居 #44 名。'
        }, 
        'degree_hint': {
            'en': 'Ranked #36 in Computer Science and Information Systems according to QS World University Rankings by Subject 2023.', 
            'zh_tw': '根據 QS 2023 年世界大學科系排名，於 Computer Science and Information Systems 領域位居 #36 名。'
        }
    };
    const education_2 = {
        'school': {
            'en': 'National Yang Ming Chiao Tung University', 
            'zh_tw': '國立陽明交通大學'
        }, 
        'degree': {
            'en': 'Master of Science in Computer Science and Engineering',  
            'zh_tw': '資訊科學與工程研究所甲組碩士'
        },
        'remark': {
            'en': 'First year GPA: 4.04/4.30', 
            'zh_tw': '第一年 GPA: 4.04/4.30'
        }, 
        'period': {
            'en': '09 2022 - 08 2024 (Expected)',
            'zh_tw': '09 2022 - 08 2024 (Expected)',
        }, 
        'location': {
            'en': 'Hsinchu, Taiwan', 
            'zh_tw': '新竹, 台灣'
        }, 
        'school_hint': {
            'en': 'Ranked #217 according to QS World University Rankings 2024.', 
            'zh_tw': '根據 QS 2024 年世界大學排名，位居 #217 名。'
        }, 
        'degree_hint': {
            'en': 'Ranked #151-200 in Computer Science and Information Systems according to QS World University Rankings by Subject 2023.', 
            'zh_tw': '根據 QS 2023 年世界大學科系排名，於 Computer Science and Information Systems 領域位居 #151-200 名。'
        }
    };
    const educations = [
        education_1, education_2
    ];


    /*
     * Captions
     */
    const caption_1 = {
        'en': 'First Prize certificate from CCCC-Mobile Application Innovation Contest.', 
        'zh_tw': '中國高校計算機大賽移動應用創新賽 "一等獎" 獎狀。'
    }
    const caption_2 = {
        'en': 'First Prize and Most Innovative Award trophies from CCCC-Mobile Application Innovation Contest.', 
        'zh_tw': '中國高校計算機大賽移動應用創新賽 "一等獎" 及 "最具創新獎" 獎盃。'
    }
    const caption_3 = {
        'en': 'Gold Award certificate from The 4th "Internet+" Innovation and Entrepreneurship Competition.', 
        'zh_tw': '第四屆中國"互聯網+"大學生創新創業大賽 "金獎" 獎狀。'
    }
    const captions = [
        caption_1, caption_2, caption_3
    ]

    /*
     * Experience contents.
     */
    const experience_1 = {
        'title': {
            'en': 'The University of British Columbia Vancouver Summer Program (VSP)', 
            'zh_tw': '英屬哥倫比亞大學 (UBC) 溫哥華暑期計畫 (VSP)'
        }, 
        'main': {
            'en': [
                'Included 2 courses, "Algorithms and the World Wide Web" and "Building Modern Web Applications".', 
                'Collaborated with my teammates to complete our projects as team leader.', 
            ], 
            'zh_tw': [
                '修讀兩門課程 Algorithms and the World Wide Web 和 Building Modern Web Applications。', 
                '擔任小組組長，與隊友合作完成小型專案。' 
            ]
        }, 
        'period': {
            'en': '07 2019 - 08 2019',
            'zh_tw': '07 2019 - 08 2019',
        }, 
        'location': {
            'en': 'Vancouver, Canada', 
            'zh_tw': '溫哥華, 加拿大'
        }
    };
    const experiences = [
        experience_1
    ];

    const translate = (lang) => {
        /*
         * Translate projects.
         */
        $.each(projects, (idx, project) => {
            /*
             * Translate title.
             */
            const title_lbl = $('#project-title-' + (idx + 1));
            const title = project['title'][lang];
            title_lbl.html(title);

            /*
             * Translate location.
             */
            const location_lbl = $('#project-location-' + (idx + 1));
            const location = project['location'][lang];
            location_lbl.html(`<em>${location}</em>`);

            /*
             * Translate period.
             */
            const period_lbl = $('#project-period-' + (idx + 1));
            const period = project['period'][lang];
            period_lbl.html(`<strong>${period}</strong>`);

            /*
             * Translate main.
             */
            // Clear old table if exists.
            const org_table = $('#project-' + (idx + 1) + ' > table');
            const len = org_table.closest('html').length;

            if (len)
                org_table.empty();

            // Append new table.
            const table = $('<table>', {'class': 'table table-striped mb-0'});
            const tbody = $('<tbody>');
            table.append(tbody);

            const main = project['main'][lang];

            $.each(main, (idx, text) => {
                const tr = $('<tr>');

                const th = $('<th>', {'scope': 'row'}).html(idx + 1);
                const td = $('<td>').html(text);

                tr.append(th);
                tr.append(td);

                table.append(tr);
            });

            $('#project-' + (idx + 1)).append(table);
        });

        /*
         * Translate awards.
         */
        $.each(awards, (idx, award) => {
            /*
             * Translate title.
             */
            const title_lbl = $('#award-title-' + (idx + 1));
            const title = award['title'][lang];
            title_lbl.html(title);

            /*
             * Translate prize.
             */
            const prize_lbl = $('#award-prize-' + (idx + 1));
            const prize = award['prize'][lang];
            prize_lbl.html(prize);

            /*
             * Translate period.
             */
            const period_lbl = $('#award-period-' + (idx + 1));
            const period = award['period'][lang];
            period_lbl.html(`<strong>${period}</strong>`);

            /*
             * Translate location.
             */
            const location_lbl = $('#award-location-' + (idx + 1));
            const location = award['location'][lang];
            location_lbl.html(`<em>${location}</em>`);
        });

        /*
         * Translate educations.
         */
        $.each(educations, (idx, education) => {
            /*
             * Translate school and hint.
             */
            const school_lbl = $('#education-school-' + (idx + 1));
            const school = education['school'][lang];
            const school_hint = education['school_hint'][lang];
            school_lbl.html(school);
            school_lbl.attr('title', school_hint);

            /*
             * Translate degree and hint.
             */
            const degree_lbl = $('#education-degree-' + (idx + 1));
            const degree = education['degree'][lang];
            const degree_hint = education['degree_hint'][lang];
            degree_lbl.html(degree);
            degree_lbl.attr('title', degree_hint);

            /*
             * Translate remark.
             */
            const remark_lbl = $('#education-remark-' + (idx + 1));
            const remark = education['remark'][lang];
            remark_lbl.html(remark);

            /*
             * Translate period.
             */
            const period_lbl = $('#education-period-' + (idx + 1));
            const period = education['period'][lang];
            period_lbl.html(`<strong>${period}</strong>`);

            /*
             * Translate location.
             */
            const location_lbl = $('#education-location-' + (idx + 1));
            const location = education['location'][lang];
            location_lbl.html(`<em>${location}</em>`);
        });

        /*
         * Translate experiences.
         */
        $.each(experiences, (idx, experience) => {
            /*
             * Translate title.
             */
            const title_lbl = $('#experience-title-' + (idx + 1));
            const title = experience['title'][lang];
            title_lbl.html(title);

            /*
             * Translate period.
             */
            const period_lbl = $('#experience-period-' + (idx + 1));
            const period = experience['period'][lang];
            period_lbl.html(`<strong>${period}</strong>`);

            /*
             * Translate location.
             */
            const location_lbl = $('#experience-location-' + (idx + 1));
            const location = experience['location'][lang];
            location_lbl.html(`<em>${location}</em>`);

            /*
             * Translate main.
             */
            // Clear old table if exists.
            const org_table = $('#experience-' + (idx + 1) + ' > table');
            const len = org_table.closest('html').length;

            if (len)
                org_table.empty();

            // Append new table.
            const table = $('<table>', {'class': 'table table-striped mb-0'});
            const tbody = $('<tbody>');
            table.append(tbody);

            const main = experience['main'][lang];

            $.each(main, (idx, text) => {
                const tr = $('<tr>');

                const th = $('<th>', {'scope': 'row'}).html(idx + 1);
                const td = $('<td>').html(text);

                tr.append(th);
                tr.append(td);

                table.append(tr);
            });

            $('#experience-' + (idx + 1)).append(table);
        });

        /*
         * Translate captions.
         */
        $.each(captions, (idx, caption) => {
            /*
             * Translate caption.
             */
            const caption_lbl = $('#material-caption-' + (idx + 1));
            const caption_content = caption[lang];
            caption_lbl.html(caption_content);
        });
    };

    const langs = {
        '#en': 'English', 
        '#zh_tw': '繁體中文'
    };
    const active = (cls) => {
        $.each(langs, (lang) => {
            if (lang === cls) 
                $(lang).html('<u>' + langs[lang] + '</u>');
            else 
                $(lang).html(langs[lang]);
        });
    }
    $('#en').click((event) => {
        if (lang_id !== 0) {
            lang_id = 0;
            translate('en');
            active('#en');
        }

        event.preventDefault();
    });
    $('#zh_tw').click((event) => {
        if (lang_id !== 1) {
            lang_id = 1;
            translate('zh_tw');
            active('#zh_tw');
        }

        event.preventDefault();
    });

    /*
     * Startup.
     */
    translate('en');
    active('#en');
});

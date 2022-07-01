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
            'en': '<a href="https://bit.ly/35GzBmc" target="_blank">Chord learning and adversarial framework for symbolic music generation</a>', 
            'zh_tw': '<a href="https://bit.ly/35GzBmc" target="_blank">基於生成對抗網路的古箏自動編曲系統</a>'
        }, 
        'main': {
            'en': [
                'Proposed a chord learning framework for multi-track symbolic music generation based on VAE and GAN, and implemented with <a href="https://pytorch.org/" target="_blank">PyTorch</a>.', 
                'Improved VAE to extract chords more easily.', 
                'Improved <a href="https://arxiv.org/pdf/1704.00028" target="_blank">WGAN-GP</a> to solve mode collapse problem, vanishing gradient problem, and bad results of some audio tracks.', 
                'Proposed three distinct loss functions, <em>element-wise</em>, <em>discriminator dominant</em>, and <em>hybrid</em>.'
            ], 
            'zh_tw': [
                '基於變分自動編碼器 (VAE) 和生成對抗網路 (GAN)，提出一個生成多音軌 (multi-track) 符號音樂 (symbolic music) 的框架，並通過<a href="https://pytorch.org/" target="_blank">PyTorch</a>實現。', 
                '改進VAE，使得和弦更容易解析。', 
                '改進WGAN-GP，解決模式崩壞 (mode collapse)、梯度消失 (vanishing gradient) 和部分音軌效果較差的問題。', 
                '提出三種損失函數 (loss function)：<em>element-wise</em>、<em>discriminator dominant</em>和<em>hybrid</em>。'
            ]
        }, 
        'location': {
            'en': '<em>Hangzhou, China</em>', 
            'zh_tw': '<em>杭州, 中國</em>'
        }
    };
    const project_2 = {
        'title': {
            'en': '<a href="https://bit.ly/3IzE3BU" target="_blank">Voice Conversion Based on Generative Adversarial Networks</a>', 
            'zh_tw': '<a href="https://bit.ly/35GzBmc" target="_blank">基於生成對抗網路的語音轉換研究</a>' 
        }, 
        'main': {
            'en': [
                'Improved <a href="https://arxiv.org/pdf/1907.12279" target="_blank">StarGAN-VC2</a> based on multi-speaker non-parallel corpus.', 
                'Introduced <a href="https://arxiv.org/pdf/1712.01026" target="_blank">WGAN-div</a> to resolve k-Lipschitz constraint of <a href="https://arxiv.org/pdf/1701.07875" target="_blank">WGAN</a>.', 
                'Provided new generator network by replacing <a href="https://arxiv.org/pdf/1610.07629" target="_blank">cIN</a> layer with trainable <a href="https://arxiv.org/pdf/1703.06868" target="_blank">AdaIN</a> layer for better performance.', 
                'Introduced neural vocoder, <a href="https://arxiv.org/pdf/1811.00002" target="_blank">WaveGlow</a>, to generate high quality speech from mel-spectrograms.'
            ], 
            'zh_tw': [
                '基於多語者 (multi-speaker) 非平行語料庫 (non-parallel corpus)，改進<a href="https://arxiv.org/pdf/1907.12279" target="_blank">StarGAN-VC2</a>。', 
                '引入<a href="https://arxiv.org/pdf/1712.01026" target="_blank">WGAN-div</a>解決<a href="https://arxiv.org/pdf/1701.07875" target="_blank">WGAN</a>原有的k-Lipschitz限制。', 
                '通過將生成網路 (generator) 的<a href="https://arxiv.org/pdf/1610.07629" target="_blank">cIN</a>層替換成<a href="https://arxiv.org/pdf/1703.06868" target="_blank">AdaIN</a>層，提升生成的語音效果。', 
                '引入神經網路語音合成器 (neural vocoder) <a href="https://arxiv.org/pdf/1811.00002" target="_blank">WaveGlow</a>，通過梅爾時頻譜 (mel-spectrograms) 生成較高音質的語音。'
            ]
        }, 
        'location': {
            'en': '<em>Hangzhou, China</em>', 
            'zh_tw': '<em>杭州, 中國</em>'
        }
    };
    const projects = [
        project_1, 
        project_2
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
            'en': '<em>First Prize</em>', 
            'zh_tw': '<em>一等獎</em>'
        },
        'location': {
            'en': '<em>Hangzhou, China</em>', 
            'zh_tw': '<em>杭州, 中國</em>'
        }
    };
    const award_2 = {
        'title': {
            'en': 'The 4th "Internet+" Innovation and Entrepreneurship Competition', 
            'zh_tw': '第四屆中國"互聯網+"大學生創新創業大賽'
        }, 
        'prize': {
            'en': '<em>Gold Award</em>', 
            'zh_tw': '<em>金獎</em>'
        },
        'location': {
            'en': '<em>Hangzhou, China</em>', 
            'zh_tw': '<em>杭州, 中國</em>'
        }
    };
    const award_3 = {
        'title': {
            'en': 'Hong Kong, Macau, and Taiwan student scholarship', 
            'zh_tw': '港澳台學生獎學金'
        }, 
        'prize': {
            'en': '<em>Third Prize</em>', 
            'zh_tw': '<em>三等獎</em>'
        },
        'location': {
            'en': '<em>Hangzhou, China</em>', 
            'zh_tw': '<em>杭州, 中國</em>'
        }
    };
    const award_4 = {
        'title': {
            'en': 'College Students\' Innovative Entrepreneurial Training Plan Program (SRTP)', 
            'zh_tw': '國家級大學生創新創業訓練計畫 (SRTP)' 
        }, 
        'prize': {
            'en': '<em>Excellent</em>', 
            'zh_tw': '<em>優秀</em>'
        },
        'location': {
            'en': '<em>Hangzhou, China</em>', 
            'zh_tw': '<em>杭州, 中國</em>'
        }
    };
    const award_5 = {
        'title': {
            'en': 'Hong Kong, Macau, and Taiwan student scholarship', 
            'zh_tw': '港澳台學生獎學金'
        }, 
        'prize': {
            'en': '<em>Second Prize</em>', 
            'zh_tw': '<em>二等獎</em>'
        },
        'location': {
            'en': '<em>Hangzhou, China</em>', 
            'zh_tw': '<em>杭州, 中國</em>'
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
            'en': '<em>Bachelor of Computer Science and Technology</em>', 
            'zh_tw': '<em>計算機科學與技術學士</em>'
        },
        'remark': {
            'en': 'Last two years cumulative GPA: 3.30/4.00', 
            'zh_tw': '最後兩年GPA: 3.30/4.00'
        },
        'location': {
            'en': '<em>Hangzhou, China</em>', 
            'zh_tw': '<em>杭州, 中國</em>'
        }, 
        'school_hint': {
            'en': 'Ranked #42 according to QS World University Rankings 2023.', 
            'zh_tw': '根據QS 2023年世界大學排名，位居 #42 名。'
        }, 
        'degree_hint': {
            'en': 'Ranked #72 in Computer Science and Information Systems according to QS World University Rankings by Subject 2022.', 
            'zh_tw': '根據QS 2022年世界大學科系排名，於Computer Science and Information Systems領域位居 #72 名。'
        }
    };
    const educations = [
        education_1
    ];


    /*
     * Captions
     */
    const caption_1 = {
        'en': 'First prize certificate from CCCC-Mobile Application Innovation Contest.', 
        'zh_tw': '中國高校計算機大賽移動應用創新賽一等獎獎狀。'
    }
    const caption_2 = {
        'en': 'First prize trophy from CCCC-Mobile Application Innovation Contest.', 
        'zh_tw': '中國高校計算機大賽移動應用創新賽一等獎獎盃。'
    }
    const caption_3 = {
        'en': 'Gold award certificate from The 4th "Internet+" Innovation and Entrepreneurship Competition.', 
        'zh_tw': '第四屆中國"互聯網+"大學生創新創業大賽金獎獎狀。'
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
                'Intensive 4-week academic program for 2 courses, including "Algorithms and the World Wide Web" and "Building Modern Web Applications".', 
                'Collaborated with my teammates to complete our projects as team leader.', 
                'Experienced the active study atmosphere in UBC, and broadened my horizons.'
            ], 
            'zh_tw': [
                '高強度的四周課程，包含"Algorithms and the World Wide Web"和"Building Modern Web Applications"。', 
                '在團隊中擔任組長，並和組員共同完成專案。', 
                '在這四周感受UBC不同的學習氛圍，拓展視野。'
            ]
        }, 
        'location': {
            'en': '<em>Vancouver, Canada</em>', 
            'zh_tw': '<em>溫哥華, 加拿大</em>'
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
            location_lbl.html(location);

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
             * Translate location.
             */
            const location_lbl = $('#award-location-' + (idx + 1));
            const location = award['location'][lang];
            location_lbl.html(location);
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
             * Translate location.
             */
            const location_lbl = $('#education-location-' + (idx + 1));
            const location = education['location'][lang];
            location_lbl.html(location);
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
             * Translate location.
             */
            const location_lbl = $('#experience-location-' + (idx + 1));
            const location = experience['location'][lang];
            location_lbl.html(location);

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

import { awards } from './data/awards.js';
import { captions } from './data/captions.js';
import { educations } from './data/educations.js';
import { experiences } from './data/experiences.js';
import { projects } from './data/projects.js';

$(document).ready(() => {
    // Supported languages: English and Traditional Chinese.
    const Languages = Object.freeze({
        EN: {id: 'en', name: 'English'},
        ZH_TW: {id: 'zh_tw', name: '繁體中文'}
    });
    // Default language: English.
    let curLangId = Languages.EN.id;

    // Change language label.
    const changeLangLbl = (langId) => {
        Object.values(Languages).forEach(lang => {
            let langLbl = $(`#${lang.id}`);
            if (lang.id === langId)   
                langLbl.html('<u>' + lang.name + '</u>');
            else
                langLbl.html(lang.name);
        });
    }

    // Translate and change language label.
    Object.values(Languages).forEach(lang => {
        $(`#${lang.id}`).click((event) => {
            if (curLangId !== lang.id) {
                curLangId = lang.id;
                translate(lang.id);
                changeLangLbl(lang.id);
            }

            event.preventDefault();
        }); 
    }); 

    const translate = (lang) => {
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
             * Translate subtitle.
             */
            const subtitle_lbl = $('#experience-subtitle-' + (idx + 1));
            const subtitle = experience['subtitle'][lang];
            subtitle_lbl.html(subtitle);

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
         * Translate educations.
         */
        $.each(educations, (idx, education) => {
            /*
             * Translate school.
             */
            const school_lbl = $('#education-school-' + (idx + 1));
            const school = education['school'][lang];
            school_lbl.html(school);

            /*
             * Translate degree.
             */
            const degree_lbl = $('#education-degree-' + (idx + 1));
            const degree = education['degree'][lang];
            degree_lbl.html(degree);

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

    // Startup.
    translate(curLangId);
    changeLangLbl(curLangId);
});

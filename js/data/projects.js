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
            'Enhanced image quality of floating images degraded by hardware imperfections.',
            'Proposed a two-stage method: (1) simulating the imaging process by solving a QP problem derived from optical principles, and (2) refining light field images through iterative optimization based on the simulation.' 
        ], 
        'zh_tw': [
            '提升因硬體缺陷而影像品質不佳的浮空立體影像。', 
            '提出兩階段方法：(1) 以光學原理推導二次規劃問題以模擬成像過程，(2) 基於模擬結果疊代修正光場圖像。'
        ]
    }, 
    'period': {
        'en': '08 2023 - 02 2025',
        'zh_tw': '08 2023 - 02 2025',
    }, 
    'location': {
        'en': 'Hsinchu, Taiwan', 
        'zh_tw': '新竹, 臺灣'
    }
};

export const projects = [
    project_1, project_2, project_3, project_4
];

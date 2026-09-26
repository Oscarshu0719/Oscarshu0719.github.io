const experience_1 = {
    'title': {
        'en': 'Camera ISP Firmware Engineer', 
        'zh_tw': '相機 ISP 韌體工程師'
    }, 
    'subtitle': {
        'en': 'Realtek Semiconductor Corp.', 
        'zh_tw': '瑞昱半導體'
    }, 
    'main': {
        'en': [ 
            {
                'title': '[Smart Glasses] ISP Firmware Development',
                'descriptions': [
                    'Developed high-resolution image stitching and aligned ISP pipeline behavior across streaming and snapshot modes.',
                    'Ported ISP pipeline to FreeRTOS on a dual-MCU system; implemented task/semaphore control and mailbox/shared-memory IPC with the Linux host.',
                ]
            },
            {
                'title': '[CModel] Framework Development',
                'descriptions': [
                    'Refactored CModel core architecture and consolidated sub-applications to improve maintainability.',
                    'Redesigned image format tables and implemented shared-memory multiprocessing on Windows/Linux with thread and cross-process synchronization.',
                    'Implemented tile mode for multi-ISP simulation: each ISP processes a spatial tile of a full-frame RAW through the pipeline and writes back to DDR to reconstruct the complete output.',
                ]
            },
            {
                'title': '[ISP/IPU] Verification Automation', 
                'descriptions': [
                    'Built automated ISP/IPU verification for FPGA/ASIC platforms with a Python server and on-device C agent.',
                    'Migrated host–device communication from JRPC to protobuf to improve transmission efficiency.',
                    'Built agentic verification flow that triages hardware vs CModel bit-true failures and generates actionable debug reports.',
                    'Built constraint-based test-case generator that parses CModel source and produces diverse valid configs via CP-SAT.',
                ]
            }, 
        ], 
        'zh_tw': [
            {
                'title': '[Smart Glasses] ISP 韌體開發',
                'descriptions': [
                    '開發高解析度影像拼接，並對齊串流與拍照模式間的 ISP pipeline 行為。',
                    '將 ISP 移植至雙 MCU 系統的 FreeRTOS；實作 task/semaphore 控制，與 Linux host 的 mailbox/shared-memory IPC。',
                ]
            },
            {
                'title': '[CModel] 框架開發',
                'descriptions': [
                    '重構 CModel 核心架構並整合子應用，以提升可維護性。',
                    '重新設計影像格式表，並於 Windows/Linux 實作 shared-memory 多程序處理，以及執行緒與跨行程同步。',
                    '實作 tile mode 以模擬多顆 ISP：各 ISP 處理全幅 RAW 的區塊，經 pipeline 後寫回 DDR 對應位置，重組完整輸出。',
                ]
            },
            {
                'title': '[ISP/IPU] 驗證自動化', 
                'descriptions': [
                    '建置 FPGA/ASIC 平台的 ISP/IPU 自動化驗證，採用 Python server 與裝置端 C agent。',
                    '將 host–device 通訊由 JRPC 遷移至 protobuf，以提升傳輸效率。',
                    '實作 agentic 驗證流程：針對硬體與 CModel 的 bit-true 失敗進行排查，並產生可執行的 debug 報告。',
                    '實作基於約束的 test case 產生器：解析 CModel 原始碼，並以 CP-SAT 產生多組合法 config。',
                ]
            },
        ]
    }, 
    'period': {
        'en': '02 2025 - 09 2026',
        'zh_tw': '02 2025 - 09 2026',
    }, 
    'location': {
        'en': 'Hsinchu, Taiwan', 
        'zh_tw': '新竹, 臺灣'
    }
};

export const experiences = [
    experience_1
];

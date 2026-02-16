const experience_1 = {
    'title': {
        'en': 'Camera ISP Firmware Engineer', 
        'zh_tw': '相機 ISP 韌體工程師'
    }, 
    'subtitle': {
        'en': 'AI camera algorithm development @ Realtek Semiconductor Corp.', 
        'zh_tw': 'AI 相機演算法開發 @ 瑞昱半導體股份有限公司'
    }, 
    'main': {
        'en': [ 
            {
                'title': 'ISP Development & Algorithm Optimization',
                'descriptions': [
                    'Developed high-resolution image stitching solution for smart glasses to ensure consistent ISP pipeline behavior between streaming and snapshot modes.', 
                    'Implemented ISP pipeline features for smart glasses with V4L2 and interrupt controls and optimized SDK flow for maintainability and efficiency.', 
                    'Migrated ISP engine for smart glasses from Linux to FreeRTOS and implemented custom porting layer for unsupported interfaces.', 
                ]
            },
            {
                'title': 'Software Architecture & Development',
                'descriptions': [
                    'Refactored core CModel architecture and consolidated sub-applications for improved maintainability and reduced code redundancy.',
                    'Implemented low-level control APIs with thread and cross-process synchronization for Windows for cross-platform compatibility.'
                ]
            },
            {
                'title': 'Test Automation & Verification', 
                'descriptions': [
                    'Designed and optimized automated verification systems for ISP/IPU (FPGA/ASIC) hardware platforms, involving Python server and C agent on hardware platforms.',
                    'Migrated communication protocol from JRPC to protobuf for the Linux-to-FreeRTOS migration for cross-platform compatibility and improved transmission efficiency.'
                ]
            }, 
        ], 
        'zh_tw': [
            {
                'title': 'ISP 開發與演算法最佳化',
                'descriptions': [
                    '開發智慧眼鏡高解析度影像拼接解決方案，確保串流與拍照模式之間 ISP pipeline 行為一致。', 
                    '為智慧眼鏡實作具 V4L2 與中斷控制的 ISP pipeline 功能，並最佳化 SDK 流程以提升可維護性與效率。', 
                    '將智慧眼鏡 ISP engine 從 Linux 移植到 FreeRTOS，並實作不支援的底層 APIs。'
                ]
            },
            {
                'title': '軟體架構與開發',
                'descriptions': [
                    '重構 CModel 核心架構，整合子應用以提升可維護性並減少重複程式碼。',
                    '於 Windows 平台實作具多執行緒與跨行程同步的底層 APIs，實現跨平台相容性。'
                ]
            },
            {
                'title': '測試自動化與驗證', 
                'descriptions': [
                    '設計與最佳化 ISP/IPU (FPGA/ASIC) 硬體平台之自動化驗證系統，涵蓋 Python server 與硬體平台上的 C agent。',
                    '於 Linux-to-FreeRTOS 移植專案中將通訊協議從 JRPC 改為 protobuf，以實現跨平台相容與提升傳輸效率。'
                ]
            },
        ]
    }, 
    'period': {
        'en': '02 2025 - Present',
        'zh_tw': '02 2025 - 迄今',
    }, 
    'location': {
        'en': 'Hsinchu, Taiwan', 
        'zh_tw': '新竹, 臺灣'
    }
};

export const experiences = [
    experience_1
];

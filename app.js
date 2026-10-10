// ========================================================
// PhonePe Clone - Exact 1:1 History & App Logic
// Month Segregation + Green Received + Vani Chicken Center
// ========================================================

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('ServiceWorker registered:', reg.scope))
            .catch(err => console.log('ServiceWorker registration error:', err));
    });
}

// ===== TRANSACTIONS DATA =====
const transactions = [
    // ===================================================
    // OCTOBER 2026 (Today Oct 10 + earlier)
    // ===================================================
    { id: 'tx_oct_vani', type: 'sent', name: 'Vani Chicken Center', amount: 500, timeAgo: '22 minutes ago', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428491029500', month: 'Oct 2026' },
    { id: 'tx_oct_01', type: 'sent', name: 'Tripura Xerox', amount: 50, timeAgo: '35 minutes ago', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428491029481', month: 'Oct 2026' },
    { id: 'tx_oct_02', type: 'sent', name: 'JANATHA JUICE AND CONDIMENTS', amount: 60, timeAgo: '42 minutes ago', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428481928472', month: 'Oct 2026' },
    { id: 'tx_oct_03', type: 'sent', name: 'Zeeshan', amount: 200, timeAgo: '47 minutes ago', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428471928473', month: 'Oct 2026' },
    { id: 'tx_oct_04', type: 'sent', name: 'Mohit', amount: 300, timeAgo: '47 minutes ago', status: 'success', autopay: true, bank: 'State Bank of India ****4901', utr: '428461928474', month: 'Oct 2026' },
    { id: 'tx_oct_05', type: 'sent', name: 'BGS Xerox and Stationary', amount: 60, timeAgo: '52 minutes ago', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428451928475', month: 'Oct 2026' },
    { id: 'tx_oct_06', type: 'sent', name: 'Sri Sai Juice Center', amount: 70, timeAgo: '1 hour ago', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428441928476', month: 'Oct 2026' },
    { id: 'tx_oct_07', type: 'sent', name: 'Annapoorneshwari hotel and restaurant', amount: 55, timeAgo: '2 hours ago', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428431928477', month: 'Oct 2026' },
    { id: 'tx_oct_08', type: 'received', name: 'Sohan', amount: 5000, timeAgo: '2 hours ago', status: 'success', autopay: false, bank: 'State Bank of India', utr: '428421928478', month: 'Oct 2026' },
    { id: 'tx_oct_09', type: 'sent', name: 'Tripura Xerox', amount: 60, timeAgo: '3 hours ago', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428411928479', month: 'Oct 2026' },
    { id: 'tx_oct_10', type: 'sent', name: 'Preetham', amount: 500, timeAgo: '5 hours ago', status: 'success', autopay: true, bank: 'State Bank of India ****4901', utr: '428401928480', month: 'Oct 2026' },
    { id: 'tx_oct_11', type: 'sent', name: 'Kabbalamma Hotel', amount: 120, timeAgo: 'Yesterday at 20:15', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428391928481', month: 'Oct 2026' },
    { id: 'tx_oct_12', type: 'sent', name: 'Cool Corner Juice & Shakes', amount: 50, timeAgo: 'Yesterday at 19:10', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428381928482', month: 'Oct 2026' },
    { id: 'tx_oct_13', type: 'received', name: 'Sohan', amount: 180, timeAgo: 'Yesterday at 18:30', status: 'success', autopay: false, bank: 'State Bank of India', utr: '428371928471', month: 'Oct 2026' },
    { id: 'tx_oct_14', type: 'sent', name: 'Nishanth', amount: 400, timeAgo: 'Yesterday at 15:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428251928466', month: 'Oct 2026' },
    { id: 'tx_oct_15', type: 'sent', name: 'BGS Xerox and Stationary', amount: 50, timeAgo: 'Yesterday at 14:20', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428241928477', month: 'Oct 2026' },
    { id: 'tx_oct_16', type: 'sent', name: 'Udupi Grand', amount: 80, timeAgo: 'Yesterday at 13:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428351928483', month: 'Oct 2026' },
    { id: 'tx_oct_17', type: 'received', name: 'Dad', amount: 2000, timeAgo: 'Yesterday at 10:15', status: 'success', autopay: false, bank: 'State Bank of India', utr: '428341928411', month: 'Oct 2026' },
    { id: 'tx_oct_18', type: 'received', name: 'Amma ❤️', amount: 100, timeAgo: 'Yesterday at 09:30', status: 'success', autopay: false, bank: 'State Bank of India', utr: '428331928422', month: 'Oct 2026' },
    { id: 'tx_oct_19', type: 'sent', name: 'Ganesh Fruit Juice Point', amount: 50, timeAgo: '08 October at 19:40', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428181928484', month: 'Oct 2026' },
    { id: 'tx_oct_20', type: 'sent', name: 'Ullas', amount: 200, timeAgo: '08 October at 17:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '428171928499', month: 'Oct 2026' },

    // ===================================================
    // SEPTEMBER 2026 (45 Transactions)
    // ===================================================
    { id: 'tx_sep_01', type: 'sent', name: 'Tripura Xerox', amount: 50, timeAgo: '30 September at 20:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '427491029401', month: 'Sep 2026' },
    { id: 'tx_sep_02', type: 'sent', name: 'Kabbalamma Hotel', amount: 140, timeAgo: '30 September at 19:15', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '427491029402', month: 'Sep 2026' },
    { id: 'tx_sep_03', type: 'sent', name: 'JANATHA JUICE AND CONDIMENTS', amount: 50, timeAgo: '30 September at 18:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '427491029403', month: 'Sep 2026' },
    { id: 'tx_sep_04', type: 'sent', name: 'Zeeshan', amount: 500, timeAgo: '29 September at 21:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '427391029404', month: 'Sep 2026' },
    { id: 'tx_sep_05', type: 'sent', name: 'Sri Sai Juice Center', amount: 60, timeAgo: '29 September at 17:45', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '427391029405', month: 'Sep 2026' },
    { id: 'tx_sep_06', type: 'sent', name: 'BGS Xerox and Stationary', amount: 60, timeAgo: '29 September at 14:20', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '427391029406', month: 'Sep 2026' },
    { id: 'tx_sep_07', type: 'sent', name: 'Mohit', amount: 200, timeAgo: '28 September at 19:30', status: 'success', autopay: true, bank: 'State Bank of India ****4901', utr: '427291029407', month: 'Sep 2026' },
    { id: 'tx_sep_08', type: 'received', name: 'Dad', amount: 2000, timeAgo: '28 September at 14:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '427291029408', month: 'Sep 2026' },
    { id: 'tx_sep_09', type: 'received', name: 'Dad', amount: 500, timeAgo: '28 September at 13:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '427291029409', month: 'Sep 2026' },
    { id: 'tx_sep_10', type: 'sent', name: 'Annapoorneshwari hotel and restaurant', amount: 65, timeAgo: '28 September at 09:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '427291029410', month: 'Sep 2026' },
    { id: 'tx_sep_11', type: 'received', name: 'Dad', amount: 2000, timeAgo: '27 September at 10:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '427191029411', month: 'Sep 2026' },
    { id: 'tx_sep_12', type: 'sent', name: 'Cool Corner Juice & Shakes', amount: 70, timeAgo: '27 September at 16:15', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '427191029412', month: 'Sep 2026' },
    { id: 'tx_sep_13', type: 'sent', name: 'Preetham', amount: 300, timeAgo: '26 September at 20:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '427091029413', month: 'Sep 2026' },
    { id: 'tx_sep_14', type: 'received', name: 'Dad', amount: 1000, timeAgo: '26 September at 18:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '427091029414', month: 'Sep 2026' },
    { id: 'tx_sep_15', type: 'received', name: 'Ullas', amount: 200, timeAgo: '26 September at 15:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '427091029415', month: 'Sep 2026' },
    { id: 'tx_sep_16', type: 'sent', name: 'Tripura Xerox', amount: 60, timeAgo: '25 September at 16:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426991029416', month: 'Sep 2026' },
    { id: 'tx_sep_17', type: 'received', name: 'Amma ❤️', amount: 100, timeAgo: '25 September at 10:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '426991029417', month: 'Sep 2026' },
    { id: 'tx_sep_18', type: 'received', name: 'Amma ❤️', amount: 100, timeAgo: '25 September at 09:30', status: 'success', autopay: false, bank: 'State Bank of India', utr: '426991029418', month: 'Sep 2026' },
    { id: 'tx_sep_19', type: 'sent', name: 'Udupi Grand', amount: 90, timeAgo: '25 September at 13:45', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426991029419', month: 'Sep 2026' },
    { id: 'tx_sep_20', type: 'sent', name: 'Nishanth', amount: 400, timeAgo: '24 September at 19:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426891029420', month: 'Sep 2026' },
    { id: 'tx_sep_21', type: 'sent', name: 'Ganesh Fruit Juice Point', amount: 50, timeAgo: '24 September at 16:20', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426891029421', month: 'Sep 2026' },
    { id: 'tx_sep_22', type: 'sent', name: 'BGS Xerox and Stationary', amount: 50, timeAgo: '23 September at 14:00', status: 'failed', autopay: false, bank: 'State Bank of India ****4901', utr: '426791029422', month: 'Sep 2026' },
    { id: 'tx_sep_23', type: 'sent', name: 'Mohit', amount: 100, timeAgo: '23 September at 13:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426791029423', month: 'Sep 2026' },
    { id: 'tx_sep_24', type: 'sent', name: 'Sri Raghavendra Bhavan', amount: 110, timeAgo: '23 September at 09:15', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426791029424', month: 'Sep 2026' },
    { id: 'tx_sep_25', type: 'received', name: 'Nishanth', amount: 300, timeAgo: '22 September at 16:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '426691029425', month: 'Sep 2026' },
    { id: 'tx_sep_26', type: 'sent', name: 'JANATHA JUICE AND CONDIMENTS', amount: 70, timeAgo: '22 September at 18:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426691029426', month: 'Sep 2026' },
    { id: 'tx_sep_27', type: 'sent', name: 'Tripura Xerox', amount: 50, timeAgo: '21 September at 14:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426591029427', month: 'Sep 2026' },
    { id: 'tx_sep_28', type: 'sent', name: 'Kabbalamma Hotel', amount: 130, timeAgo: '21 September at 13:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426591029428', month: 'Sep 2026' },
    { id: 'tx_sep_29', type: 'received', name: 'Dad', amount: 500, timeAgo: '20 September at 07:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '426491029429', month: 'Sep 2026' },
    { id: 'tx_sep_30', type: 'sent', name: 'Sri Sai Juice Center', amount: 50, timeAgo: '20 September at 17:10', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426491029430', month: 'Sep 2026' },
    { id: 'tx_sep_31', type: 'sent', name: 'Dhanush', amount: 200, timeAgo: '19 September at 19:45', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426391029431', month: 'Sep 2026' },
    { id: 'tx_sep_32', type: 'received', name: 'Dad', amount: 1000, timeAgo: '19 September at 16:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '426391029432', month: 'Sep 2026' },
    { id: 'tx_sep_33', type: 'sent', name: 'Mohit', amount: 100, timeAgo: '18 September at 14:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426291029433', month: 'Sep 2026' },
    { id: 'tx_sep_34', type: 'sent', name: 'Meghana Foods', amount: 280, timeAgo: '18 September at 20:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426291029434', month: 'Sep 2026' },
    { id: 'tx_sep_35', type: 'sent', name: 'Nishanth', amount: 400, timeAgo: '17 September at 18:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426191029435', month: 'Sep 2026' },
    { id: 'tx_sep_36', type: 'sent', name: 'Preetham', amount: 500, timeAgo: '17 September at 17:00', status: 'success', autopay: true, bank: 'State Bank of India ****4901', utr: '426191029436', month: 'Sep 2026' },
    { id: 'tx_sep_37', type: 'received', name: 'Amma ❤️', amount: 100, timeAgo: '17 September at 12:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '426191029437', month: 'Sep 2026' },
    { id: 'tx_sep_38', type: 'sent', name: 'Cool Corner Juice & Shakes', amount: 60, timeAgo: '16 September at 18:15', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426091029438', month: 'Sep 2026' },
    { id: 'tx_sep_39', type: 'sent', name: 'BGS Xerox and Stationary', amount: 60, timeAgo: '16 September at 15:40', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '426091029439', month: 'Sep 2026' },
    { id: 'tx_sep_40', type: 'sent', name: 'Yathin', amount: 200, timeAgo: '15 September at 19:20', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '425991029440', month: 'Sep 2026' },
    { id: 'tx_sep_41', type: 'sent', name: 'Udupi Grand', amount: 75, timeAgo: '15 September at 13:10', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '425991029441', month: 'Sep 2026' },
    { id: 'tx_sep_42', type: 'sent', name: 'BGS Xerox and Stationary', amount: 50, timeAgo: '14 September at 14:00', status: 'failed', autopay: false, bank: 'State Bank of India ****4901', utr: '425891029442', month: 'Sep 2026' },
    { id: 'tx_sep_43', type: 'sent', name: 'Tripura Xerox', amount: 60, timeAgo: '13 September at 16:45', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '425791029443', month: 'Sep 2026' },
    { id: 'tx_sep_44', type: 'received', name: 'Sohan', amount: 500, timeAgo: '11 September at 14:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '425591029444', month: 'Sep 2026' },
    { id: 'tx_sep_45', type: 'received', name: 'Dad', amount: 3500, timeAgo: '11 September at 12:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '425591029445', month: 'Sep 2026' },

    // ===================================================
    // AUGUST 2026 (50 Transactions)
    // ===================================================
    { id: 'tx_aug_01', type: 'sent', name: 'Tripura Xerox', amount: 50, timeAgo: '31 August at 18:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424591029501', month: 'Aug 2026' },
    { id: 'tx_aug_02', type: 'sent', name: 'JANATHA JUICE AND CONDIMENTS', amount: 60, timeAgo: '31 August at 17:15', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424591029502', month: 'Aug 2026' },
    { id: 'tx_aug_03', type: 'sent', name: 'Ullas', amount: 200, timeAgo: '30 August at 16:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424491029503', month: 'Aug 2026' },
    { id: 'tx_aug_04', type: 'received', name: 'Sohan', amount: 100, timeAgo: '30 August at 15:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '424491029504', month: 'Aug 2026' },
    { id: 'tx_aug_05', type: 'sent', name: 'Zeeshan', amount: 500, timeAgo: '30 August at 14:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424491029505', month: 'Aug 2026' },
    { id: 'tx_aug_06', type: 'received', name: 'Preetham', amount: 500, timeAgo: '30 August at 13:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '424491029506', month: 'Aug 2026' },
    { id: 'tx_aug_07', type: 'sent', name: 'Kabbalamma Hotel', amount: 150, timeAgo: '29 August at 20:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424391029507', month: 'Aug 2026' },
    { id: 'tx_aug_08', type: 'sent', name: 'Sri Sai Juice Center', amount: 70, timeAgo: '29 August at 18:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424391029508', month: 'Aug 2026' },
    { id: 'tx_aug_09', type: 'sent', name: 'Mohit', amount: 200, timeAgo: '28 August at 19:15', status: 'success', autopay: true, bank: 'State Bank of India ****4901', utr: '424291029509', month: 'Aug 2026' },
    { id: 'tx_aug_10', type: 'sent', name: 'BGS Xerox and Stationary', amount: 60, timeAgo: '28 August at 15:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424291029510', month: 'Aug 2026' },
    { id: 'tx_aug_11', type: 'sent', name: 'Annapoorneshwari hotel and restaurant', amount: 60, timeAgo: '27 August at 13:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424191029511', month: 'Aug 2026' },
    { id: 'tx_aug_12', type: 'sent', name: 'Tripura Xerox', amount: 50, timeAgo: '27 August at 11:20', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424191029512', month: 'Aug 2026' },
    { id: 'tx_aug_13', type: 'received', name: 'Dad', amount: 2500, timeAgo: '26 August at 10:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '424091029513', month: 'Aug 2026' },
    { id: 'tx_aug_14', type: 'sent', name: 'Nishanth', amount: 300, timeAgo: '26 August at 17:40', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '424091029514', month: 'Aug 2026' },
    { id: 'tx_aug_15', type: 'sent', name: 'Cool Corner Juice & Shakes', amount: 50, timeAgo: '25 August at 19:10', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423991029515', month: 'Aug 2026' },
    { id: 'tx_aug_16', type: 'sent', name: 'Udupi Grand', amount: 85, timeAgo: '25 August at 14:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423991029516', month: 'Aug 2026' },
    { id: 'tx_aug_17', type: 'sent', name: 'Preetham', amount: 400, timeAgo: '24 August at 20:00', status: 'success', autopay: true, bank: 'State Bank of India ****4901', utr: '423891029517', month: 'Aug 2026' },
    { id: 'tx_aug_18', type: 'sent', name: 'BGS Xerox and Stationary', amount: 50, timeAgo: '24 August at 16:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423891029518', month: 'Aug 2026' },
    { id: 'tx_aug_19', type: 'received', name: 'Amma ❤️', amount: 200, timeAgo: '23 August at 11:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '423791029519', month: 'Aug 2026' },
    { id: 'tx_aug_20', type: 'sent', name: 'Ganesh Fruit Juice Point', amount: 60, timeAgo: '23 August at 18:20', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423791029520', month: 'Aug 2026' },
    { id: 'tx_aug_21', type: 'sent', name: 'Dhanush', amount: 200, timeAgo: '22 August at 19:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423691029521', month: 'Aug 2026' },
    { id: 'tx_aug_22', type: 'sent', name: 'Sri Raghavendra Bhavan', amount: 100, timeAgo: '22 August at 13:15', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423691029522', month: 'Aug 2026' },
    { id: 'tx_aug_23', type: 'sent', name: 'Tripura Xerox', amount: 60, timeAgo: '21 August at 15:45', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423591029523', month: 'Aug 2026' },
    { id: 'tx_aug_24', type: 'sent', name: 'JANATHA JUICE AND CONDIMENTS', amount: 50, timeAgo: '21 August at 17:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423591029524', month: 'Aug 2026' },
    { id: 'tx_aug_25', type: 'sent', name: 'Zeeshan', amount: 300, timeAgo: '20 August at 21:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423491029525', month: 'Aug 2026' },
    { id: 'tx_aug_26', type: 'sent', name: 'Kabbalamma Hotel', amount: 135, timeAgo: '20 August at 14:10', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423491029526', month: 'Aug 2026' },
    { id: 'tx_aug_27', type: 'received', name: 'Dad', amount: 1500, timeAgo: '19 August at 09:30', status: 'success', autopay: false, bank: 'State Bank of India', utr: '423391029527', month: 'Aug 2026' },
    { id: 'tx_aug_28', type: 'sent', name: 'Sri Sai Juice Center', amount: 60, timeAgo: '19 August at 18:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423391029528', month: 'Aug 2026' },
    { id: 'tx_aug_29', type: 'sent', name: 'BGS Xerox and Stationary', amount: 60, timeAgo: '18 August at 16:20', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423291029529', month: 'Aug 2026' },
    { id: 'tx_aug_30', type: 'sent', name: 'Yathin', amount: 100, timeAgo: '18 August at 19:40', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423291029530', month: 'Aug 2026' },
    { id: 'tx_aug_31', type: 'sent', name: 'Udupi Grand', amount: 70, timeAgo: '17 August at 13:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423191029531', month: 'Aug 2026' },
    { id: 'tx_aug_32', type: 'sent', name: 'Tripura Xerox', amount: 50, timeAgo: '16 August at 14:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423091029532', month: 'Aug 2026' },
    { id: 'tx_aug_33', type: 'sent', name: 'Cool Corner Juice & Shakes', amount: 70, timeAgo: '16 August at 17:50', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '423091029533', month: 'Aug 2026' },
    { id: 'tx_aug_34', type: 'sent', name: 'Mohit', amount: 300, timeAgo: '15 August at 20:15', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422991029534', month: 'Aug 2026' },
    { id: 'tx_aug_35', type: 'received', name: 'Sohan', amount: 400, timeAgo: '15 August at 16:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '422991029535', month: 'Aug 2026' },
    { id: 'tx_aug_36', type: 'sent', name: 'Meghana Foods', amount: 260, timeAgo: '14 August at 21:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422891029536', month: 'Aug 2026' },
    { id: 'tx_aug_37', type: 'sent', name: 'BGS Xerox and Stationary', amount: 50, timeAgo: '14 August at 15:10', status: 'failed', autopay: false, bank: 'State Bank of India ****4901', utr: '422891029537', month: 'Aug 2026' },
    { id: 'tx_aug_38', type: 'sent', name: 'Ganesh Fruit Juice Point', amount: 50, timeAgo: '13 August at 18:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422791029538', month: 'Aug 2026' },
    { id: 'tx_aug_39', type: 'sent', name: 'Ullas', amount: 200, timeAgo: '13 August at 14:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422791029539', month: 'Aug 2026' },
    { id: 'tx_aug_40', type: 'sent', name: 'Tripura Xerox', amount: 60, timeAgo: '12 August at 16:40', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422691029540', month: 'Aug 2026' },
    { id: 'tx_aug_41', type: 'sent', name: 'Annapoorneshwari hotel and restaurant', amount: 50, timeAgo: '11 August at 12:45', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422591029541', month: 'Aug 2026' },
    { id: 'tx_aug_42', type: 'sent', name: 'Sri Sai Juice Center', amount: 60, timeAgo: '11 August at 17:15', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422591029542', month: 'Aug 2026' },
    { id: 'tx_aug_43', type: 'sent', name: 'Preetham', amount: 500, timeAgo: '10 August at 20:00', status: 'success', autopay: true, bank: 'State Bank of India ****4901', utr: '422491029543', month: 'Aug 2026' },
    { id: 'tx_aug_44', type: 'received', name: 'Amma ❤️', amount: 100, timeAgo: '10 August at 10:30', status: 'success', autopay: false, bank: 'State Bank of India', utr: '422491029544', month: 'Aug 2026' },
    { id: 'tx_aug_45', type: 'sent', name: 'Nishanth', amount: 200, timeAgo: '09 August at 18:20', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422391029545', month: 'Aug 2026' },
    { id: 'tx_aug_46', type: 'sent', name: 'JANATHA JUICE AND CONDIMENTS', amount: 70, timeAgo: '08 August at 19:00', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422291029546', month: 'Aug 2026' },
    { id: 'tx_aug_47', type: 'sent', name: 'BGS Xerox and Stationary', amount: 60, timeAgo: '06 August at 15:30', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '422091029547', month: 'Aug 2026' },
    { id: 'tx_aug_48', type: 'sent', name: 'Zeeshan', amount: 200, timeAgo: '05 August at 19:45', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '421991029548', month: 'Aug 2026' },
    { id: 'tx_aug_49', type: 'sent', name: 'Udupi Grand', amount: 90, timeAgo: '03 August at 13:20', status: 'success', autopay: false, bank: 'State Bank of India ****4901', utr: '421791029549', month: 'Aug 2026' },
    { id: 'tx_aug_50', type: 'received', name: 'Dad', amount: 3000, timeAgo: '01 August at 11:00', status: 'success', autopay: false, bank: 'State Bank of India', utr: '421591029550', month: 'Aug 2026' }
];

// Arrow Icon definitions matching exact user images
const SVG_ARROW_SENT = `<img src="sent_arrow.svg" alt="Paid to" width="44" height="44">`;
const SVG_ARROW_RECEIVED = `<img src="received_arrow.svg" alt="Received from" width="44" height="44">`;

const SVG_SBI_LOGO = `
<svg width="15" height="15" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="#0077b6"/>
    <circle cx="12" cy="12" r="4.5" fill="#000000"/>
    <rect x="10.8" y="12" width="2.4" height="7.5" fill="#000000"/>
</svg>
`;

const SVG_UPI_LOGO = `
<svg width="30" height="15" viewBox="0 0 60 24">
    <rect width="60" height="24" rx="4" fill="#000000"/>
    <text x="12" y="17" fill="#ffffff" font-size="14" font-weight="900" font-family="-apple-system, sans-serif">UPI</text>
    <polygon points="48,5 54,12 48,19" fill="#00b4d8"/>
    <polygon points="42,5 48,12 42,19" fill="#f77f00"/>
</svg>
`;

const monthTotals = {
    'Oct 2026': '+ ₹7,280.00',
    'Sep 2026': '+ ₹9,400.00',
    'Aug 2026': '+ ₹7,700.00'
};

// Render History List matching exact screenshot with Month Segregation
function renderHistoryList() {
    const listContainer = document.getElementById('historyList');
    if (!listContainer) return;

    // Group transactions by month
    const groups = {};
    transactions.forEach(tx => {
        const m = tx.month || 'Oct 2026';
        if (!groups[m]) groups[m] = [];
        groups[m].push(tx);
    });

    let html = '';
    Object.keys(groups).forEach(monthKey => {
        // Month Segregation Bar
        html += `
            <div class="month-summary-bar">
                <span class="month-label-text">${monthKey}</span>
                <span class="month-total-text">
                    ${monthTotals[monthKey] || '+ ₹0.00'}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
            </div>
        `;

        // Transaction items inside the month
        groups[monthKey].forEach(tx => {
            const isReceived = tx.type === 'received';
            const isFailed = tx.status === 'failed';
            const typeLabel = isReceived ? 'Received from' : 'Paid to';
            const arrowSvg = isReceived ? SVG_ARROW_RECEIVED : SVG_ARROW_SENT;

            let bankInfoHtml = '';
            if (isFailed) {
                bankInfoHtml = `<div class="tx-bank-row">Failed <span class="failed-icon-dot">!</span></div>`;
            } else if (isReceived) {
                bankInfoHtml = `<div class="tx-bank-row">Credited to <span class="upi-logo-wrap">${SVG_UPI_LOGO}</span></div>`;
            } else {
                bankInfoHtml = `<div class="tx-bank-row">Debited from <span class="sbi-icon-wrap">${SVG_SBI_LOGO}</span></div>`;
            }

            const amountClass = isReceived ? 'tx-large-amount received' : 'tx-large-amount';
            const amountFormatted = `${isReceived ? '+ ' : ''}₹${tx.amount.toLocaleString('en-IN')}`;

            html += `
                <div class="tx-history-row" onclick="openTransactionModal('${tx.id}')">
                    <div class="tx-arrow-icon">
                        ${arrowSvg}
                    </div>
                    
                    <div class="tx-center-meta">
                        <div class="tx-sub-type">${typeLabel}</div>
                        <div class="tx-main-name">${tx.name}</div>
                        <div class="tx-date-stamp">${tx.timeAgo}</div>
                    </div>

                    <div class="tx-right-meta">
                        ${tx.autopay ? `<div class="autopay-tag"><span class="autopay-badge-icon">A</span> AUTOPAY</div>` : ''}
                        <div class="${amountClass}">${amountTextFormatted(tx)}</div>
                        ${bankInfoHtml}
                    </div>
                </div>
            `;
        });
    });

    listContainer.innerHTML = html;
}

function amountTextFormatted(tx) {
    const isReceived = tx.type === 'received';
    return `${isReceived ? '+ ' : ''}₹${tx.amount.toLocaleString('en-IN')}`;
}

// Transaction Detail Modal Logic
function openTransactionModal(txId) {
    const tx = transactions.find(t => t.id === txId);
    if (!tx) return;

    const isReceived = tx.type === 'received';
    const isFailed = tx.status === 'failed';

    document.getElementById('modalDirectionIcon').innerHTML = isReceived ? 
        `<img src="received_arrow.svg" alt="Received" width="56" height="56" style="display:block;">` : 
        `<img src="sent_arrow.svg" alt="Paid" width="56" height="56" style="display:block;">`;
    document.getElementById('modalName').innerText = (isReceived ? 'Received from ' : 'Paid to ') + tx.name;
    document.getElementById('modalDateTime').innerText = tx.timeAgo;

    const amountEl = document.getElementById('modalAmount');
    amountEl.innerText = `${isReceived ? '+ ' : ''}₹${tx.amount.toLocaleString('en-IN')}`;
    amountEl.className = 'modal-large-amount ' + (isReceived ? 'received' : 'sent');

    const statusEl = document.getElementById('modalStatus');
    statusEl.innerText = isFailed ? 'Transaction Failed' : 'Transaction Successful';
    statusEl.className = 'modal-status-pill ' + (isFailed ? 'failed' : 'success');

    document.getElementById('modalType').innerText = tx.autopay ? 'UPI Autopay' : 'UPI Payment';
    document.getElementById('modalUtr').innerText = tx.utr;
    document.getElementById('modalBank').innerText = tx.bank;

    document.getElementById('txModal').classList.add('active');
}

function closeTransactionModal() {
    document.getElementById('txModal').classList.remove('active');
}

// Bottom Tab Navigation
function setupTabNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    const pages = document.querySelectorAll('.view-page');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPage = document.getElementById(`view-${targetTab}`);
            if (targetPage) targetPage.classList.add('active');

            if (targetTab === 'history') {
                renderHistoryList();
            }
        });
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    setupTabNavigation();
    renderHistoryList();
});

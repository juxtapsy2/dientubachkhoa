import { Wrench, ShieldCheck, Zap, MonitorCheck } from 'lucide-react';

export const TELEPHONE = "tel:+84946409966";
export const ZALO = "https://zalo.me/0946409966";
export const SLOGAN = "Chất lượng, nhanh chóng, giá cả hợp lý, bảo hành tận ly.";

export const NAVLINKS = [
  { label: "Về chúng tôi", to: "/#about"},
  { label: "Dịch vụ", to: "/#services" },
  { label: "Liên hệ", to: "/#contact" },
];

export const ADDRESSES = [
    { district: 'Cầu Giấy', address: '81 Trần Cung' },
    { district: 'Hai Bà Trưng', address: '102 Bạch Mai' },
    { district: 'Đống Đa', address: '14 Tây Sơn' },
    { district: 'Thanh Xuân', address: '75 Nguyễn Trãi' },
    { district: 'Hoàng Mai', address: '88 Giáp Bát' },
    { district: 'Ba Đình', address: '22 Đội Cấn' },
    { district: 'Long Biên', address: '65 Nguyễn Văn Cừ' },
    { district: 'Bắc Từ Liêm', address: '17 Cổ Nhuế' },
    { district: 'Nam Từ Liêm', address: '99 Lê Đức Thọ' },
    { district: 'Hà Đông', address: '110 Quang Trung' },
    { district: 'Tây Hồ', address: '31 Xuân Diệu' },
    { district: 'Gia Lâm', address: '12 Nguyễn Đức Thuận' },
];

export const FEATURES = [
    {
      icon: <Zap size={28} className="text-blue-500" />,
      title: 'Tư vấn & hỗ trợ 24/7',
      desc: 'Gọi là đến ngay sau 20 – 25 phút trong khu vực Hà Nội.',
    },
    {
      icon: <Wrench size={28} className="text-blue-500" />,
      title: 'Chẩn đoán & sửa chữa tận nơi',
      desc: 'Kiểm tra lỗi miễn phí – sửa tận nhà với chi phí tiết kiệm.',
    },
    {
      icon: <ShieldCheck size={28} className="text-blue-500" />,
      title: 'Bảo hành dài hạn',
      desc: 'Bảo hành từ 6 tháng đến 2 năm tuỳ từng linh kiện.',
    },
    {
      icon: <MonitorCheck size={28} className="text-blue-500" />,
      title: 'Không phát sinh phụ phí',
      desc: 'Báo đúng bệnh – sửa đúng giá.',
    },
];

export const TV_ERRORS = [
    {
      title: 'Bệnh nguồn',
      errors: [
        'Không có đèn báo nguồn.',
        'Bật máy 2 – 5 phút mới chạy.',
        'Chạy 2–5 phút rồi tự tắt.',
        'Đèn báo nguồn nhấp nháy 2 lần.',
        'Rơ le kêu lạch cạch, đèn đỏ nhấp nháy.',
        'Đèn báo nguồn nhấp nháy 2, 8 lần.',
      ],
    },
    {
      title: 'Bệnh cao áp',
      errors: [
        'Máy chạy 2–5 giây rồi tự tắt.',
        'Màn hình thấy ảnh tối.',
        'Máy có tiếng, không hình.',
        'Chạy vài phút thì mất hình, vẫn còn tiếng.',
        'Đèn đỏ nhấp nháy 4, 6, 7 lần.',
      ],
    },
    {
        title: 'Bệnh Panel',
        errors: [
          'Màn sáng nhưng không có hình.',
          'Màn hình kẻ ngang, kẻ dọc.',
          'Bóng chữ, chồng 2 hình.',
          'Đèn báo nguồn nhấp nháy 5, 13 lần.',
          'Trắng màn hình.',
          'Màn hình rộp, gợn lóa trắng như bóng mây.',
        ],
    },
    {
      title: 'Bệnh bo mạch điều khiển',
      errors: [
        'Không dò được kênh.',
        'Không nhận tín hiệu cổng AV, HDMI,...',
        'Đèn nguồn luôn ở trạng thái màu vàng.',
        'Đèn xanh chuyển sang đèn đỏ báo lỗi 2, 3, 8, 13.',
        'Không nhận khiển từ xa, phím cơ không hoạt động.',
      ],
    },
];

export const COMMITMENT = "Trung Tâm Điện Tử Bách Khoa chuyên sửa chữa tất cả các loại tivi tận nhà, nhanh chóng với giá rẻ. Với tay nghề và am hiểu chuyên sâu, Kỹ thuật viên có thể bắt đúng bệnh và dứt điểm lỗi, hạn chế tối đa tái phát. Mục tiêu của chúng tôi là hướng đến một dịch vụ sửa Tivi uy tín và chất lượng nhất tại Hà Nội!";

export const FAQs = [
  {
    question: "Tôi không biết rõ Tivi đang bị hư hỏng gì?",
    answer: "Bạn chỉ cần gọi cho chúng tôi, kỹ thuật viên sẽ đến và kiểm tra hoàn toàn miễn phí.",
  },
  {
    question: "Điện tử Bách Khoa có thể sửa dứt điểm các bệnh nào?",
    answer: "Chúng tôi sửa tất cả các lỗi phổ biến như mất hình, mất tiếng, lỗi nguồn, bo khiển, panel, và hơn thế nữa.",
  },
  {
    question: "Bao nhiêu lâu thì các bạn sẽ đến?",
    answer: "Chúng tôi có mặt tại nhà bạn sau 15–30 phút kể từ khi nhận yêu cầu.",
  },
  {
    question: "Sửa Tivi tại nhà hết bao nhiêu lâu?",
    answer: "Thời gian sửa từ 15 phút đến 1 giờ, tùy theo mức độ hư hỏng.",
  },
  {
    question: "Sửa màn hình Tivi hết bao nhiêu tiền?",
    answer: "Tùy lỗi và loại tivi, giá cả dao động từ 300.000 - 1.500.000. Luôn báo giá trước khi làm.",
  },
  {
    question: "Thời gian bảo hành như thế nào?",
    answer: "Bảo hành từ 6 tháng đến 2 năm tùy vào từng linh kiện thay thế.",
  },
];
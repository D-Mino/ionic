import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NavbarProvider } from '../../providers/navbar/navbar';

/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  hour: number;
  minut: number;
  second: number;
  time: string;
  stop: boolean;

  current: any;
  index: number;
  data: object[];
  answerRadio: any;
  answerCheckbox: any[] = [];
  score: number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _nav: NavbarProvider,
    public alertCtrl: AlertController
  ) {
    this.stop = false;
    this.hour = 0;
    this.minut = 40;
    this.second = 0;
    this.data = [
      {
        title: " Những chữ đầu của nhóm từ ACL là tên viết tắt của:",
        type: "radio", //'radio', checkbox
        reply: [
          { content: "Arbitrary Code Language", status: false },
          { content: "Access Control Library", status: true },
          { content: "Access Control List", status: false },
          { content: "Allowed Computer List", status: false },
        ]
      },
      {
        title: " Nên cài mức truy cập mặc định là mức nào sau đây?",
        type: "checkbox", //'radio'
        reply: [
          { content: "Full access", status: false },
          { content: "No access", status: true },
          { content: "Read access", status: true },
          { content: "Write access", status: false },
        ]
      },
      {
        title: " Sau khi một user được định danh và xác thực hệ thống, để cho phép user sử dụng tài nguyên bạn phải thực hiện điều gì?",
        type: "radio", //'radio'
        reply: [
          { content: "Được truyền lại", status: false },
          { content: "Phải được ủy quyền", status: true },
          { content: "Được mã hóa", status: false },
          { content: "Được enables", status: false },
        ]
      },
      {
        title: " Quyền truy cập nào cho phép ta lưu giữ một tập tin?",
        type: "radio", //'radio'
        reply: [
          { content: "Đọc", status: false },
          { content: "Sao chép", status: true },
          { content: "Hiệu chỉnh", status: false },
          { content: "Ghi", status: false },
        ]
      },
      {
        title: " Quyền truy cập nào cho phép ta hiệu chỉnh thuộc tính của một tập tin?",
        type: "radio", //'radio'
        reply: [
          { content: "Hiệu chỉnh (Modify)", status: true },
          { content: "Sao chép (Copy)", status: false },
          { content: "Thay đổi (Change)", status: false },
          { content: "Biên tập ( Edit)", status: false },
        ]
      },
      {
        title: " Các quyền truy cập tối đa nên dành cho user là gì",
        type: "radio", //'radio'
        reply: [
          { content: "Ít nhất là quyền đọc và ghi", status: false },
          { content: "Không có quyền truy cập", status: false },
          { content: "Đủ để thực hiện công việc theo chức trách", status: true },
          { content: "Toàn quyền", status: false },
        ]
      },
      {
        title: "  Chính sách tài khoản nào nên được thiết lập để ngăn chặn các cuộc tấn công ác ý vào tài khoản của user?",
        type: "radio", //'radio'
        reply: [
          { content: "Disable tài khoản không dùng đến", status: false },
          { content: "Hạn chế thời gian", status: false },
          { content: "Ngày hết hạn tài khoản", status: false },
          { content: "Giới hạn số lần logon", status: true },
        ]
      },
      {
        title: "   Sau khi một user đã được định danh (identifed), điều gì cần phải làm trước khi họ log vào một mạng máy tính ?",
        type: "radio", //'radio'
        reply: [
          { content: "Xác thực với mật khẩu", status: false },
          { content: "Họ phải nhập user ID đã được mã hóa", status: false },
          { content: "Được phép truy cập với mức ưu tiên được thiết lập .", status: false },
          { content: "Người quản trị phải enable để gõ vào", status: true },
        ]
      },
      {
        title: "Chiều dài tối thiểu của mật khẩu cần phải là :",
        type: "radio", //'radio'
        reply: [
          { content: "12 đến 15 ký tự", status: false },
          { content: "3 đến 5 ký tự", status: false },
          { content: "8 ký tự.", status: true },
          { content: "1 đến 3 ký tự", status: false },
        ]
      },
      {
        title: "Điều gì cần được thực hiện đối với tập tin mật khẩu để ngăn chặn một người dùng trái phép crack vào các nội dung ?",
        type: "radio", //'radio'
        reply: [
          { content: "Hủy bỏ tất cả các quyền truy cập ", status: false },
          { content: "Mã hóa tập tin mật khẩu", status: false },
          { content: "Di chuyển ngoại tuyến đến một đĩa mềm", status: true },
          { content: "Sao chép đến một tập tin bù nhìn với một tên khác ", status: false },
        ]
      },
    ];

    this.index = 0;
    this.current = this.data[this.index];
  }

  ionViewDidLoad() {
    this.checkTime();
    this.setTime();

    this._nav.title = this.time;
    this._nav.color = "primary";

    let interval = setInterval(() => {
      if (this.stop) {
        clearInterval(interval);
      }

      this.checkTime();
      this.setTime();

      this._nav.title = this.time;
    }, 1000);
  }

  next() {
    if (!this.answerRadio && !this.answerCheckbox.length) {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Bạn chưa chọn câu trả lời!',
        buttons: ['OK']
      });
      alert.present();

      return;
    }

    if (this.answerRadio && this.answerRadio.status) {
      this.score += 1;
    }

    if (this.answerCheckbox.length > 0) {
      let i = 0;
      this.current.reply.forEach((item: any) => {
        if (item.status) {
          i += 1;
        }
      });

      let j = 0;
      this.answerCheckbox.forEach((item: any) => {
        if (item.status) {
          j += 1;
        }
      });

      if (i !== 0 && i == j) {
        this.score += 1;
      }
    }

    if (this.index === this.data.length - 1) {
      this.stop = true;

      return;
    }

    this.answerRadio = null;
    this.answerCheckbox = [];
    this.index += 1;
    this.current = this.data[this.index];
  }

  updateScore(item, event) {
    if (event.checked) {
      this.answerCheckbox.push(item);
    } else {
      this.answerCheckbox = this.answerCheckbox.filter((i: any) => i.content !== item.content);
    }
  }

  setTime() {
    this.time = (this.hour < 10 ? '0' + this.hour.toString() : this.hour.toString())
      + ":" + (this.minut < 10 ? '0' + this.minut.toString() : this.minut.toString())
      + ":" + (this.second < 10 ? '0' + this.second.toString() : this.second.toString());
  }

  checkTime() {
    if (this.second === 0 && this.minut === 0 && this.hour === 0) {
      this.stop = true;

      return;
    }

    if (this.second > 0) {
      this.second -= 1;

      return;
    }

    if (this.second === 0 && this.minut > 0) {
      this.minut -= 1;
      this.second = 59;

      return;
    }

    if (this.minut === 0 && this.hour > 0) {
      this.hour -= 1;
      this.minut = 59;

      return;
    }

    this.stop = true;

    return;
  }
}

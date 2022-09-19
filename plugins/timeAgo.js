export default ({ app }, inject) => {
    inject('timeAgo', date => {
        let waktu = new Date(date)
        let seconds = Math.floor((Date.now() - waktu) / 1000);
        let unit = "detik";
        let direction = "yang lalu";
        if (seconds < 0) {
            seconds = -seconds;
            direction = "dari sekarang";
        }
        let value = seconds;
        if (seconds >= 31536000) {
            value = Math.floor(seconds / 31536000);
            unit = "tahun";
        } else if (seconds >= 86400) {
            value = Math.floor(seconds / 86400);
            unit = "hari";
        } else if (seconds >= 3600) {
            value = Math.floor(seconds / 3600);
            unit = "jam";
        } else if (seconds >= 60) {
            value = Math.floor(seconds / 60);
            unit = "menit";
        }
        // if (value != 1)
        //     unit = unit + "s";
        return value + " " + unit + " " + direction;
    })
}
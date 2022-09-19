export default ({ app }, inject) => {
    inject('formatIDDate', (tgl = null) => {
        let bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember',]
        let now = tgl == null ? new Date() : new Date(tgl)
        let month = '' + (now.getMonth())
        let day = '' + now.getDate()
        let year = now.getFullYear()
        if (day.length < 2) 
            day = '0' + day;
        return `${day} ${bulan[month]} ${year}`
    })
  }
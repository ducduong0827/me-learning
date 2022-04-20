export function emailValidator(email) {
    const typing = /\S+@\S+\.\S+/
    if (!email) return "Email không được để trống."
    if (!typing.test(email)) return 'Dòng này cần một email hợp lệ.'
    return ''
  }
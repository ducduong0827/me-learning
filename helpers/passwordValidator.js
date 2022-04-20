export function passwordValidator(password) {
    if (!password) return "Mật khẩu không được để trống."
    if (password.length < 8 )return 'Mật khẩu phải có ít nhất 8 kí tự.'
    return ''
  }
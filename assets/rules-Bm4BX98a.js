const r=t=>!!t||"必填欄位",n=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||"請輸入有效的電子郵件地址",s=t=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,30}$/.test(t)||"密碼需包含小寫英文、大寫英文、數字及符號，且長度為12~30個字",u=(t,e)=>t===e||"密碼確認輸入不一致",a=t=>t&&t.trim().length>0||"姓名不可為空",o=t=>t&&t.trim().length==6||"驗證碼需為6位數字",c=t=>!0;export{u as a,o as c,n as e,a as n,s as p,r,c as u};
//# sourceMappingURL=rules-Bm4BX98a.js.map

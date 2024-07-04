# Bonne idée 好點子手作 線上商店

### Live Demo

### 這是一個使用 React (v18) 和 vite 建立的專案。

![image](/public/RWD%20display.png)
響應式網站設計

近期更新: 04/10/2024

# Introduction 介紹

### 【專案發想】

由於我的興趣是做 macrame 手工編織，想要一個專屬於自己品牌的線上商店一直都是個夢想，既然學了網站開發，當然自己的網站要自己做! **(現階段僅當作品使用，非商用)**  
從 Logo、配色到網站排版都是自己構想，希望能展現跟品牌名「bonne idée」(法文，好點子之意) 一樣，能透過手工編織，將美好的點子融入生活中，為每個角落帶來獨特的溫暖與風格。

### 【前端工具】

#### UI Library 和工具

- LottieFiles/lottie-react: Loading (以 LOGO 自製)、Error 和 submit successfully 的動畫
- MUI: Alert (表單提示、加入或移除喜愛商品清單、未登入等) 、 Modal (顏色參考元件)
- framer-motion: 首頁的「關於 Bonne idée」照片和「About Macrame」元件 scroll 動畫，讓網頁更有活潑互動感
- React-icons

#### 其他 Library

- Auth0: 接受透過第三方註冊或登入並驗證身分
- React-router-dom: 設定路由/巢狀路由、路由參數、路由導航
- TanStack (react-query): 拿取/更新/提交/緩存資料、server 狀態管理
- axios: 向 server 發出請求工具

# Feature 網站功能介紹

#### 登入/註冊

使用 Auth0 接受透過第三方註冊、登入並驗證身分

![image](/public/login.png)

---

#### 商品一覽 '/products'

- side menu 可以快速篩選商品分類
- 每個商品卡片都有獨立的加入/移除最愛商品清單按鈕(愛心 icon )，加入或移除清單都會跳出 Alert 提示
- 點擊單一商品卡片可進入該商品介紹頁面

![image](/public/all-products.png)

---

#### 商品介紹 '/products/:ID'

- 點擊「顏色參考」按鈕會跳出色卡 modal
- 加入購物車前需要先選擇商品顏色，若沒選擇則會跳出 Alert 提示「請選商品顏色」；加入購物車成功時會跳出 Alert 提示「加入購物車成功」
- 加入/移除最愛商品清單按鈕(愛心 icon )

![image](/public/product-detail.png)

---

#### 購物車 '/order-progress/shopping-cart'

- 上方的 progress bar 可以顯示頁面進行到哪個步驟
- 按「x」(icon)按鈕可刪除單一商品、按「清空購物車」按鈕則將購物車全部商品清空
- 可在此頁面更新商品顏色和數量
- 確定商品後點選「填寫訂單」按鈕方可進行下一步驟

![image](/public/shopping-cart.png)

---

#### 填寫訂單 '/order-progress/order-form'

- 若表單必填項目沒填寫，則會跳出 Alert 提示「請填寫完整資訊」
- 左方訂單確認供會員再次確認訂單內容

![image](/public/order-form02.png)

---

#### 訂單建立完成

- 訂單建立完成後會顯示訂單編號，供會員在到「會員專區」查找該訂單內容。

![image](/public/order-done.png)

---

#### 會員專區 '/user-page'

- 每個會員有專屬自己的會員專區，會驗證身分後才能進入，並顯示會員名稱
- 點擊「訂單查詢」或「收藏清單」可切換頁面並查看訂單明細或收藏商品清單

##### 訂單查詢

- 顯示每筆訂單的編號、狀態和日期
- 點擊「查看明細」可下拉並查看該訂單的商品明細和訂單明細

![image](/public/user-page-order.png)

##### 訂單查詢

- 會員可查看收藏的商品清單，點選「愛心 icon」可以移除清單

![image](/public/user-page-fav.png)

# Getting Start

1.Clone this project.

2.Install

```javascript
npm install
```

3.Run the project

```javascript
npm run dev
```

import React from "react"

const AdminContacts = () => {
  return (
    <div className="p-4 mx-auto max-w-[1400px]">
      <h1 className="text-left text-4xl font-bold mt-6 mb-4">문의 관리</h1>

      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex w-full md:w-auto gap-2">
          <select className="border rounded px-3 py-2 text-base">
            <option value="name">이름</option>
            <option value="email">이메일</option>
            <option value="phone">연락처</option>
            <option value="message">문의내용</option>
          </select>
          <div className="flex-1 md:w-80">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              className="w-full border rounded px-3 py-2 text-base"
            />
          </div>
          <select className="border rounded px-3 py-2 text-base">
            <option value="all">전체 상태</option>
            <option value="pending">대기중</option>
            <option value="in progress">진행중</option>
            <option value="completed">완료</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label className="text-base font-bold text-gray-600">페이지당 표시: </label>
          <select className="border rounded px-2 py-2">
            {[10, 25, 50, 100].map((size) => (
              <option key={size} value={size}>{`${size}개`}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-lg font-bold text-gray-600">총 0개의 문의</div>
      </div>
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden text-sm lg:text-lg font-bold">
          <thread className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">번호</th>
              <th className="px-4 py-3 text-left">이름</th>
              <th className="px-4 py-3 text-left">이메일</th>
              <th className="px-4 py-3 text-left">휴대폰</th>
              <th className="px-4 py-3 text-left">문의 내용</th>
              <th className="px-4 py-3 text-left">상태</th>
              <th className="px-4 py-3 text-center">관리</th>
            </tr>
          </thread>
        </table>
      </div>
    </div>
  )
}

export default AdminContacts

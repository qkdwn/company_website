import React, { useState, useEffect, useMemo } from "react"

const AdminContacts = () => {
  const [contacts, setContacts] = useState([])

  const [selectContact, setSelectContact] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("name")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/contact", {
          withCredentials: true,
        })

        setContacts(response.data)
      } catch (error) {
        console.log("문의글 가져오기 실패: ", error)
      }
    }

    fetchContacts()
  }, [])
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const value = contact[searchType].toLowerCase() || ""
      const matchesSearch = value.includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || contact.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [contacts, searchTerm, searchType, statusFilter])

  return (
    <div className="p-4 mx-auto max-w-[1400px]">
      <h1 className="text-left text-4xl font-bold mt-6 mb-4">문의 관리</h1>

      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex w-full md:w-auto gap-2">
          <select
            className="border rounded px-3 py-2 text-base "
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="border rounded px-3 py-2 text-base"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
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
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">번호</th>
              <th className="px-4 py-3 text-left">이름</th>
              <th className="px-4 py-3 text-left">이메일</th>
              <th className="px-4 py-3 text-left">휴대폰</th>
              <th className="px-4 py-3 text-left">문의 내용</th>
              <th className="px-4 py-3 text-left">상태</th>
              <th className="px-4 py-3 text-center">관리</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b">
                <td className="px-4 py-3">{contact.id}</td>
                <td className="px-4 py-3">{contact.name}</td>
                <td className="px-4 py-3">{contact.email}</td>
                <td className="px-4 py-3">{contact.phone}</td>
                <td className="px-4 py-3">{contact.message}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      contact.status === "대기중"
                        ? "bg-blue-100 text-blue-800"
                        : contact.status === "진행중"
                        ? "bg-yellow-100 text-yellow-800"
                        : contact.status === "완료"
                        ? "bg-green-100 text-green-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {contact.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center space-x-2">
                    <button className="px-3 py-1.5 bg-blue-500 text-white hover:bg-blue-600 rounded-lg">수정</button>
                    <button className="px-3 py-1.5 bg-red-500 text-white hover:bg-red-600 rounded-lg">삭제</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-col-1 gap-4 md:hidden">
        {contacts.map((contact) => (
          <div key={contact.id} className="p-4 border rounded-lg bg-white shadow-md">
            <div className="text-lg font-bold">번호: {contact.id}</div>
            <div>이름: {contact.name}</div>
            <div>이메일: {contact.email}</div>
            <div>휴대폰: {contact.phone}</div>
            <div>내용: {contact.message}</div>
            <div>
              상태:
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  contact.status === "대기중"
                    ? "bg-blue-100 text-blue-800"
                    : contact.status === "진행중"
                    ? "bg-yellow-100 text-yellow-800"
                    : contact.status === "완료"
                    ? "bg-green-100 text-green-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {contact.status}
              </span>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="px-3 py-1.5 bg-blue-500 text-white hover:bg-blue-600 rounded-lg">수정</button>
              <button className="px-3 py-1.5 bg-red-500 text-white hover:bg-red-600 rounded-lg">삭제</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center space-x-2 text-lg font-bold">
        <button className="px-3 py-1 rounded border disabled:opacity-50">이전</button>
        <span className="px-3 py-1">1 / 1</span>
        <button className="px-3 py-1 rounded border disabled:opacity-50">다음</button>
      </div>
    </div>
  )
}

export default AdminContacts

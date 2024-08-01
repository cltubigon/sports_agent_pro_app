import React, { useEffect, useState } from "react"
import { useStore } from "zustand"
import utilityStore from "@/utilities/store/store"
import { NumericFormat } from "react-number-format"

const Amount = () => {
  const {
    carePackage: { donationAmount, priceList },
    setDonationAmount,
    setPriceList,
  } = useStore(utilityStore)
  const [theVal, settheVal] = useState(donationAmount)

  const handleOnChange = (e) => {
    const val = e.target.value
    const replaced = val.replace(/^\$|,/g, "")
    const parsed = parseFloat(replaced)
    if (!parsed) return
    setDonationAmount(parsed)
    setPriceList(0)
  }

  const hasActive = priceList?.some((price) => price.active === true)

  useEffect(() => {
    if (hasActive) settheVal("")
  }, [priceList, hasActive])

  const handleFocus = () => {
    settheVal(null)
  }

  return (
    <div>
      <NumericFormat
        onFocus={handleFocus}
        value={theVal}
        required
        prefix={"$"}
        decimalScale={2}
        thousandSeparator=","
        fixedDecimalScale={true}
        allowNegative={false}
        placeholder="Enter custom amount"
        onChange={handleOnChange}
        style={{
          textAlign: "center",
          border: "1px solid #8c8c8c",
          borderRadius: "4px",
          padding: "18px 10px",
          fontSize: "17px",
          width: "100%",
        }}
      />
    </div>
  )
}

export default Amount

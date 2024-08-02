import React from 'react'
import ModuleContainer from '../review/ModuleContainer'
import Checkbox from '@/app/components/inputsFields/Checkbox'

const TermsAndConditions = ({ sethasAcceptedTC }) => {
  const handleChange = ({ target: { checked } }) => {
    sethasAcceptedTC(checked)
  }
  return (
    <ModuleContainer title={'Terms and conditions'}>
      <Checkbox
        defaultChecked={true}
        onChange={handleChange}
        id="termsandcondtions"
      >
        {`By submitting this contract, I acknowledge and agree that this contract
        and all provisions therein will be governed by the Sports Agent Pro Deals Terms
        and Conditions.If I choose to attach my own terms to this submission
        ("Additional Terms"), those Additional Terms will govern in addition to
        the Sports Agent Pro Deal Terms and Conditions and in the case of conflict the
        Additional Terms shall control.`}
      </Checkbox>
    </ModuleContainer>
  )
}

export default TermsAndConditions

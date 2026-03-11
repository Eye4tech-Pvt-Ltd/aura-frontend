import EmailInput from '@/components/common/Input/EmailInput'
import Input from '@/components/common/Input/Input'
import ModalWrapper from '@/components/common/modals/ModalWrapper'
import Selector from '@/components/common/Selector'
import { usePost } from '@/src/lib/api/swr-fetcher'
import { inviteMemberSchema } from '@/src/validation/teammate-schema'
import { Briefcase, Mail, ShieldCheck } from 'lucide-react'
import React from 'react'

const InviteModal = ({ setModal }: { setModal: (show: boolean) => void }) => {
  const { postData, loading } = usePost('/team-members')
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log('Form Values:', values)
    postData(values, () => {
      setModal(false)
      setSubmitting(false)
    })
  }
  return (
    <ModalWrapper
      title="Invite New Member"
      toggle={() => setModal(false)}
      btnText="Send Invitation"
      initialValues={{ email: '', role: '' }}
      validationSchema={inviteMemberSchema}
      handleSubmit={handleSubmit}
      loading={loading}
    >
      <EmailInput icon={Mail} focus={true} />

      <Selector
        Icon={ShieldCheck}
        name="role"
        label="Role"
        options={['admin', 'customer']}
      />
    </ModalWrapper>
  )
}

export default InviteModal

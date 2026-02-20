import EmailInput from '@/components/common/Input/EmailInput'
import Input from '@/components/common/Input/Input'
import ConfirmModal from '@/components/common/modals/ModalConfirm'
import ModalWrapper from '@/components/common/modals/ModalWrapper'
import Selector from '@/components/common/Selector'
import { usePost, useUpdate } from '@/src/lib/api/swr-fetcher'
import { inviteMemberSchema } from '@/src/validation/teammate-schema'
import { Briefcase, Mail, ShieldCheck } from 'lucide-react'
import React, { useEffect } from 'react'

const UpdateInviteModal = ({
  setModal,
  initialValues,
}: {
  setModal: (show: boolean) => void
  initialValues: any
}) => {
  const { updateData, loading } = useUpdate('/team-members')
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log('Form Values:', values)
    updateData(`/team-members?id=${initialValues.id}`, values, () => {
      setModal(false)
      setSubmitting(false)
    })
  }

  useEffect(() => {
    console.log('initialValues', initialValues)
  }, [initialValues])
  return (
    <>
      <ModalWrapper
        title="Update Member"
        toggle={() => setModal(false)}
        btnText="Update Member"
        initialValues={initialValues}
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
    </>
  )
}

export default UpdateInviteModal

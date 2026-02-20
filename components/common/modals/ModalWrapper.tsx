import Button from '@/components/user/common/Button'
import { inviteMemberSchema } from '@/src/validation/teammate-schema'
import { Formik, Form } from 'formik'
import { handle } from 'hono/cloudflare-pages'

const ModalWrapper = ({
  children,
  toggle,
  title,
  btnText = 'Send',
  initialValues,
  validationSchema,
  handleSubmit,
  loading,
}: {
  children: React.ReactNode
  toggle: () => void
  title: string
  btnText?: string
  validationSchema: any
  initialValues: any
  handleSubmit: any
  loading: boolean
}) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg w-full md:w-[600px] m-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, { setSubmitting })
          }}
        >
          {() => (
            <Form>
              <h3 className="font-semibold text-slate-900 mb-4">{title}</h3>

              <div className="space-y-4">{children}</div>

              <div className="flex gap-2 pt-4">
                <Button
                  disabled={loading}
                  type="submit"
                  variant="primary"
                  className="flex-1 cursor-pointer"
                >
                  {btnText}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  className="cursor-pointer"
                  onClick={toggle}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ModalWrapper

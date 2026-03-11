'use client'
import { use, useContext, useEffect, useState } from 'react'
import {
  UserPlus,
  Mail,
  Shield,
  Crown,
  User,
  MoreVertical,
  Search,
  Loader2,
} from 'lucide-react'
import Button from '../common/Button'
import Badge from '../common/Badge'
import ModalWrapper from '@/components/common/modals/ModalWrapper'
import InviteModal from './InviteModal'
import { useDelete, useGetSWR } from '@/src/lib/api/swr-fetcher'
import Options from './Options'
import UpdateInviteModal from './UpdateInviteModal'
import { useModal } from '@/app/context/ModalContext'
import {
  TeammateData,
  TeammateGetResponseData,
  TeammateResponseData,
} from '@/src/types/teamate'
import Pagination from '@/components/common/Pagination'
import Input from '@/components/common/Input/Input'

const roles = [
  {
    name: 'Owner',
    description: 'Full access to all features and settings',
    permissions: [
      'Manage billing',
      'Delete workspace',
      'Invite members',
      'Manage AI agents',
      'View analytics',
    ],
    icon: Crown,
    color:
      'text-accent-orange-600 bg-gradient-to-br from-accent-orange-400 to-accent-orange-600',
  },
  {
    name: 'Admin',
    description: 'Manage team and AI agent settings',
    permissions: [
      'Invite members',
      'Manage AI agents',
      'View analytics',
      'Edit flows',
    ],
    icon: Shield,
    color: 'text-primary-600 bg-gradient-to-br from-primary-400 to-primary-600',
  },
  {
    name: 'Agent',
    description: 'Handle calls and view reports',
    permissions: ['Handle calls', 'View analytics', 'Update knowledge base'],
    icon: User,
    color: 'text-slate-600 bg-gradient-to-br from-slate-400 to-slate-600',
  },
]

const Team = () => {
  const [page, setPage] = useState(1)
  const {
    data: teamGetData,
    error: teamGetError,
    mutate: teamGetMutate,
    isLoading: teamGetLoading,
  } = useGetSWR<TeammateGetResponseData>('/team-members')

  const [showInviteModal, setShowInviteModal] = useState(false)
  const [selectedData, setSelectedData] = useState<TeammateData | null>(null)
  const [editTeamMember, setEditTeamMember] = useState(false)
  const { closeModal, openModal } = useModal()
  const [deleteTeamMember, setDeleteTeamMember] = useState(false)
  const { deleteData, loading } = useDelete('/team-members')

  return (
    <div className="min-h-screen bg-slate-50 p-2 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Team Management
              </h1>
              <p className="text-slate-600">
                Manage team members and permissions
              </p>
            </div>
            <Button
              variant="primary"
              icon={UserPlus}
              className="cursor-pointer"
              onClick={() => setShowInviteModal(!showInviteModal)}
            >
              Invite Member
            </Button>
          </div>
        </div>
        {teamGetLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Team Members */}

            <div className="lg:col-span-2 space-y-6">
              <div className="divide-y divide-slate-200">
                {teamGetData && teamGetData?.users?.length > 0 ? (
                  <div>
                    <div className="p-4 border-b border-slate-200">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <h2 className="font-semibold text-slate-900">
                          Team Members ({teamGetData?.users?.length})
                        </h2>
                        <div className="w-full md:w-2/4">
                          <Input
                            name={'search'}
                            type={'text'}
                            placeholder={'Search here'}
                            Icon={Search}
                            handleChange={() => {}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200/60 shadow-md">
                      {teamGetData &&
                        teamGetData?.users.map((member) => {
                          const roleInfo = roles.find(
                            (r) => r.name === member?.role
                          )
                          const RoleIcon = roleInfo?.icon || User

                          return (
                            <div
                              key={member?.id}
                              className="p-6 hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex items-start gap-4">
                                <div className="relative">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold shadow-md">
                                    {member?.avatar}
                                  </div>
                                  {member?.status === 'active' && (
                                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-accent-green-500 rounded-full border-2 border-white"></span>
                                  )}
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-slate-900">
                                      {member?.name ||
                                        member?.email.split('@')[0]}
                                    </h3>
                                    <div
                                      className={`p-1 rounded ${roleInfo?.color} shadow-sm`}
                                    >
                                      <RoleIcon className="w-3 h-3 text-white" />
                                    </div>
                                  </div>
                                  <p className="text-sm text-slate-600 mb-2">
                                    {member?.email}
                                  </p>

                                  <div className="flex items-center gap-4 text-xs text-slate-600">
                                    <Badge
                                      variant={
                                        member?.status === 'active'
                                          ? 'success'
                                          : 'neutral'
                                      }
                                      size="sm"
                                    >
                                      {member?.role}
                                    </Badge>
                                    <span>
                                      Last active: {member?.lastActive}
                                    </span>
                                    <span>Calls: {member?.callsHandled}</span>
                                  </div>
                                </div>
                                <div className="relative">
                                  <button
                                    onClick={() => {
                                      setSelectedData(
                                        selectedData ? null : member
                                      )
                                    }}
                                    className="cursor-pointer p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                                  >
                                    <MoreVertical className="w-5 h-5" />
                                  </button>
                                  {selectedData?.id === member?.id && (
                                    <Options
                                      onEdit={() => {
                                        setEditTeamMember(true)
                                      }}
                                      onDelete={() => {
                                        setSelectedData(null)
                                        openModal(
                                          'Are you sure you want to delete this item?',
                                          async () => {
                                            closeModal()
                                            await deleteData(
                                              `team-members/${member?.id}`,
                                              () => {}
                                            )
                                          },
                                          'Delete'
                                        )
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                    </div>
                    <Pagination page={page} setPage={setPage} totalPages={20} />
                  </div>
                ) : (
                  <p className="text-center text-md font-normal">
                    No teammate Invited{' '}
                  </p>
                )}
              </div>

              {showInviteModal && <InviteModal setModal={setShowInviteModal} />}
              {editTeamMember && selectedData && (
                <UpdateInviteModal
                  setModal={setEditTeamMember}
                  initialValues={{
                    email: selectedData.email,
                    role: selectedData.role,
                    id: selectedData.id,
                  }}
                />
              )}
            </div>

            {/* Roles & Permissions */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200/60 shadow-md p-6">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Roles & Permissions
                </h3>

                <div className="space-y-4">
                  {roles.map((role) => {
                    const Icon = role.icon
                    return (
                      <div
                        key={role.name}
                        className="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`p-1.5 rounded ${role.color} shadow-md`}
                          >
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-semibold text-slate-900">
                            {role.name}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mb-3">
                          {role.description}
                        </p>
                        <div className="space-y-1">
                          {role.permissions.map((perm, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-xs text-slate-600"
                            >
                              <div className="w-1 h-1 rounded-full bg-primary-500"></div>
                              <span>{perm}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200 shadow-md">
                <h3 className="font-semibold text-slate-900 mb-2">Team Plan</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Pro Plan - 4 of 10 seats used
                </p>
                <div className="h-2 bg-white/60 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                    style={{ width: '40%' }}
                  ></div>
                </div>
                <Button variant="secondary" size="sm" className="w-full">
                  Upgrade Plan
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Team

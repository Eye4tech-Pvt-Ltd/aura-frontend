"use client"
import { useState } from 'react';
import { Upload, File, CheckCircle, Clock, AlertCircle, Search, Plus, Trash2, Edit, Download } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const documents = [
  { id: 1, name: 'Product Catalog 2024.pdf', size: '2.4 MB', uploaded: '2024-01-15', status: 'processed', pages: 45 },
  { id: 2, name: 'Pricing Guide.docx', size: '580 KB', uploaded: '2024-01-14', status: 'processed', pages: 12 },
  { id: 3, name: 'FAQ Database.xlsx', size: '340 KB', uploaded: '2024-01-14', status: 'processing', pages: 8 },
  { id: 4, name: 'Company Policies.pdf', size: '1.8 MB', uploaded: '2024-01-12', status: 'processed', pages: 32 },
  { id: 5, name: 'Service Terms.pdf', size: '920 KB', uploaded: '2024-01-10', status: 'failed', pages: 0 },
];

const faqs = [
  { id: 1, question: 'What are your business hours?', answer: 'We are open Monday to Friday, 9 AM to 6 PM EST.', category: 'General' },
  { id: 2, question: 'How do I schedule an appointment?', answer: 'You can call us or use our online booking system.', category: 'Booking' },
  { id: 3, question: 'What is your cancellation policy?', answer: '24 hours notice required for cancellations.', category: 'Policies' },
  { id: 4, question: 'Do you offer emergency services?', answer: 'Yes, we have 24/7 emergency support available.', category: 'Services' },
];

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState<'documents' | 'faqs'>('documents');
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 p-2 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Knowledge Base</h1>
              <p className="text-slate-600">Train your AI agent with documents and FAQs</p>
            </div>
            <Button variant="primary" icon={Upload}>
              Upload Document
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'documents'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:bg-white/50'
              }`}
            >
              Documents
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'faqs'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:bg-white/50'
              }`}
            >
              FAQs
            </button>
          </div>
        </div>

        {activeTab === 'documents' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upload Area */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border-2 border-dashed border-slate-300 p-12 text-center hover:border-primary-400 hover:bg-primary-50/30 transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Upload Documents</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Drag and drop files here, or click to browse
                </p>
                <p className="text-xs text-slate-500">
                  Supports PDF, DOCX, XLSX, TXT (Max 10MB)
                </p>
              </div>

              {/* Documents List */}
              <div className="bg-white rounded-xl border border-slate-200/60 card-shadow">
                <div className="p-4 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-slate-900">Uploaded Documents</h2>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search documents..."
                        className="pl-9 pr-3 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="divide-y divide-slate-200">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDoc(doc.id)}
                      className={`p-4 hover:bg-slate-50 cursor-pointer transition-colors ${
                        selectedDoc === doc.id ? 'bg-primary-50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-100">
                          <File className="w-5 h-5 text-slate-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-slate-900 mb-1 truncate">{doc.name}</h3>
                          <div className="flex items-center gap-3 text-xs text-slate-600">
                            <span>{doc.size}</span>
                            <span>•</span>
                            <span>{doc.pages} pages</span>
                            <span>•</span>
                            <span>{doc.uploaded}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {doc.status === 'processed' && (
                            <Badge variant="success" size="sm">
                              <CheckCircle className="w-3 h-3" />
                              Processed
                            </Badge>
                          )}
                          {doc.status === 'processing' && (
                            <Badge variant="warning" size="sm">
                              <Clock className="w-3 h-3" />
                              Processing
                            </Badge>
                          )}
                          {doc.status === 'failed' && (
                            <Badge variant="error" size="sm">
                              <AlertCircle className="w-3 h-3" />
                              Failed
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Training Status */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200/60 card-shadow p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Training Status</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Documents Processed</span>
                      <span className="text-sm font-semibold text-primary-600">4/5</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Total Pages</span>
                      <span className="font-semibold text-slate-900">97</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Knowledge Items</span>
                      <span className="font-semibold text-slate-900">342</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Last Updated</span>
                      <span className="font-semibold text-slate-900">2 hours ago</span>
                    </div>
                  </div>
                </div>

                <Button variant="primary" className="w-full mt-6">
                  Retrain AI Agent
                </Button>
              </div>

              {selectedDoc && (
                <div className="bg-white rounded-xl border border-slate-200/60 card-shadow p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Document Actions</h3>
                  <div className="space-y-2">
                    <Button variant="ghost" size="sm" icon={Download} className="w-full justify-start">
                      Download
                    </Button>
                    <Button variant="ghost" size="sm" icon={Edit} className="w-full justify-start">
                      Edit Metadata
                    </Button>
                    <Button variant="ghost" size="sm" icon={Trash2} className="w-full justify-start text-red-600">
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200/60 card-shadow">
                <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                  <h2 className="font-semibold text-slate-900">FAQ Database</h2>
                  <Button variant="primary" size="sm" icon={Plus}>
                    Add FAQ
                  </Button>
                </div>
                <div className="divide-y divide-slate-200">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="p-6 hover:bg-slate-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="info" size="sm">{faq.category}</Badge>
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200/60 card-shadow p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {['General', 'Booking', 'Policies', 'Services'].map((category) => (
                  <div key={category} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                    <span className="text-sm font-medium text-slate-700">{category}</span>
                    <Badge variant="neutral" size="sm">
                      {faqs.filter(f => f.category === category).length}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Knowledge;
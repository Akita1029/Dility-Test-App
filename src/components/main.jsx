
import { Tab } from '@headlessui/react'
import { InformationCircleIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import avatar from '../assets/avatar.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Main({users, onDelete}) {
    console.log(users)
  return (
    <div className="bg-white">
        
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-rose-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          DEMO WORKSHOP
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
                <Tab.Group>
                    <Tab.List className="flex border-b border-gray-200">
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                'py-4 px-3 mt-2 text-md font-medium text-rose-500',
                                selected
                                    ? 'bg-white border-b-2 border-rose-500'
                                    : 'text-black hover:text-rose-500'
                                )
                            }
                        >
                            OverView
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                'py-4 px-3 mt-2 text-md font-medium text-rose-500',
                                selected
                                    ? 'bg-white border-b-2 border-rose-500'
                                    : 'text-black hover:text-rose-500'
                                )
                            }
                        >
                            People
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                'py-4 px-3 mt-2 text-md font-medium text-rose-500',
                                selected
                                    ? 'bg-white border-b-2 border-rose-500'
                                    : 'text-black hover:text-rose-500'
                                )
                            }
                        >
                            QnA
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel className={classNames(
                                'rounded-xl bg-white p-3',
                            )}>OverView</Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl bg-white p-3',
                            )}
                            
                        >
                            <div className="flex flex-col">
                                <p className='mt-5 text-3xl'>Explanation</p>
                                <p className=' mt-5 text-sm'>Keep track of your people which are connected to the workshop and update them easily. Compose & send the workshop invitation to specific people or to all
                                     of them at the same time...</p>
                                <a className="w-48 mt-10 border rounded-3xl border-rose-500 flex gap-x-2.5 p-3 text-sm font-semibold text-rose-500 cursor-pointer"><InformationCircleIcon className="h-5 w-5 flex-none text-rose-500" aria-hidden="true" />See how it works</a>
                                <div className='flex items-center justify-start mt-10'>
                                    <div className="sm:col-span-3">
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder='     write name'
                                                className="block w-full rounded-md border border-rose-500 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-rose-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <a className="mt-2 ml-5 w-48 border rounded-3xl bg-rose-500 flex gap-x-2.5 p-2 text-sm font-semibold text-white cursor-pointer"><PlusCircleIcon className="ml-2 h-5 w-5 flex-none text-white" aria-hidden="true" />Add Persons</a>
                                    </div>
                                </div>

                                
                                <div className='flex items-center justify-between mt-10'>
                                    <p className='text-3xl'>Invitation list</p>
                                    <div className="relative mt-2 rounded-md">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                        <span className="text-gray-500 sm:text-sm"><MagnifyingGlassIcon className="h-5 w-5 flex-none" aria-hidden="true" /></span>
                                        </div>
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="input search text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Department
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Accepted
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Role
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Remove
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) =>(
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                
                                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                    <img className="w-10 h-10 rounded-full" src={avatar} alt="Jese image" />
                                                    <div className="pl-3">
                                                        <div className="text-base font-semibold">{user.name}</div>
                                                        <div className="font-normal text-gray-500">{user.email}</div>
                                                    </div>  
                                                </th>
                                                <td className="px-6 py-4">
                                                    HR
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        {user.state === 'Accepted'? 
                                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                                            : user.state === 'Pending'? 
                                                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div>
                                                            : <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                                                        }
                                                            {user.state}
                                                    </div>
                                                </td>
                                                <select id="country" name="country" autoComplete="country-name" className="mb-8 block w-full rounded-md py-1.5 bg-gray-800 text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option>HR</option>
                                                    <option>IT</option>
                                                    <option>Management</option>
                                                </select>
                                                <td className="px-6 py-4">
                                                    <TrashIcon className="h-5 w-5 flex-none text-rose-500" aria-hidden="true" onClick={() => onDelete(user.id)}/>
                                                </td>
                                            </tr>
                                        ) )}
                                    </tbody>
                                </table>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel className={classNames(
                                'rounded-xl bg-white p-3',
                            )}></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>

                
            </div>
        </nav>
      </header>
    </div>
  )
}
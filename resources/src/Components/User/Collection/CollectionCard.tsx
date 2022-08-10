import React from "react"
import { DefProps, UsePage } from "@/@types/Global"
import { Collection } from "@/@types/Models"
import { PH_THUMBNAIL } from "@/common/constants"
import ButtonLink from "@@/Form/ButtonLink"
import { usePage } from "@inertiajs/inertia-react"

interface Props extends DefProps {
  collection: Collection
}

const CollectionCard = ({ collection, className = '' }: Props) => {

  const $ = usePage<UsePage>().props;


  return (
    <div className="card min-w-[250px] w-[400px] bg-base-100 shadow-xl">
      <figure>
        <img src={collection.thumbnail ?? PH_THUMBNAIL} alt={collection.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">
          {collection.name}
        </h2>
        <p>{collection.description}</p>
        <div className="card-actions justify-end">
          <ButtonLink
            href={route('u.collections.show', {
              uname: $.auth.user.username,
              id: collection.id
            })}
            as="button"
            className="btn-accent text-base"
          >
            View
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard

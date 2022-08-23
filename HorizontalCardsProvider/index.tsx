import React from "react";
import HorizontalCard, { HorizontalCardProps } from "./HorizontalCard";
import { ListContextProvider, useListContext } from 'vtex.list-context'

export interface HorizontalCardProviderProps{
  items: HorizontalCardProps[]; 
  children: React.ReactNode;
}

const getComponentItems = (items: HorizontalCardProps[]) =>{
  return items.map(item => <HorizontalCard {...item} />)
}


export default function HorizontalCardProvider({items, children}:HorizontalCardProviderProps){
  
  const list = useListContext()?.list ?? []

  const components = getComponentItems(items)
  const newListContextValue = list.concat(components)
  
  return (
    <ListContextProvider list={newListContextValue}>
      {children}
    </ListContextProvider>
  )
}
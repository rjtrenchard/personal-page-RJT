import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCube() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const w = mount.clientWidth
    const h = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.z = 4.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(window.devicePixelRatio)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(2, 2, 2)

    // Solid dark fill
    const fill = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({
        color: 0x111827,
        transparent: true,
        opacity: 0.7,
      })
    )
    scene.add(fill)

    // Accent wireframe edges
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0x22d3ee })
    )
    scene.add(edges)

    // Inner smaller cube for depth
    const innerGeo = new THREE.BoxGeometry(1, 1, 1)
    const innerEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(innerGeo),
      new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.3 })
    )
    scene.add(innerEdges)

    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      fill.rotation.x += 0.004
      fill.rotation.y += 0.007
      edges.rotation.x = fill.rotation.x
      edges.rotation.y = fill.rotation.y
      innerEdges.rotation.x -= 0.006
      innerEdges.rotation.y -= 0.009
      renderer.render(scene, camera)
    }
    animate()

    const observer = new ResizeObserver(() => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    })
    observer.observe(mount)

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
}
